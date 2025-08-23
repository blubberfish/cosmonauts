"use client";
import { Send } from "@deemlol/next-icons";
import React, { useCallback, useEffect, useState } from "react";

interface ChatEntry {
  type: "request" | "response";
  text: string;
  timestamp: number;
}

export function Chat({ sessionId }: { sessionId: string }) {
  const [history, setHistoryState] = useState<ChatEntry[]>([]);
  const [pending, setPendingState] = useState<Promise<string | undefined | null>>();

  useEffect(() => {
    if (!pending) return;
    let aborted = false;
    pending
      .then((data) => {
        console.log("Aborted:", aborted ? "yes" : "no");
        if (aborted || !data) return;
        setHistoryState((state) => [
          ...state,
          { type: "response", text: data, timestamp: Date.now() } as ChatEntry,
        ]);
      })
      .finally(() => {
        if (aborted) return;
        setPendingState(() => undefined);
      });
    return () => {
      aborted = true;
    };
  }, [pending]);

  const uploadMessage: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      if (!apiKey) {
        throw new Error("Missing API key");
      }
      const formData = new FormData(event.currentTarget);
      const inputText = formData.get("inputText") as string;
      const sessionId = formData.get("sessionId") as string;
      if (!inputText || !sessionId) {
        return;
      }
      setHistoryState((state) => [
        ...state,
        { type: "request", text: inputText, timestamp: Date.now() },
      ]);
      setPendingState(
        fetch(
          "https://hrqmuaeyo6.execute-api.ap-southeast-1.amazonaws.com/staging/v1/assistant",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": apiKey,
            },
            body: JSON.stringify({
              inputText,
              sessionId,
            }),
            signal: AbortSignal.timeout(15000), // 10 seconds timeout
          }
        ).then((response) => {
          if (response.ok) {
            return response.json().then((data) => {
              console.log("Response data:", data);
              if (data.sessionId !== sessionId) {
                return null;
              }
              return data.response;
            });
          }
          return null;
        })
      );
    },
    []
  );

  return (
    <div className="h-full flex flex-col justify-stretch p-4">
      <div className="flex flex-col flex-1 gap-4 overflow-auto">
        {history.map((entry) => (
          <div
            className={`px-4 py-2 rounded ${
              entry.type === "response" ? "rounded-tl-0" : "rounded-br-0"
            } ${entry.type === "response" ? "bg-white" : "bg-blue-100"}`}
            key={entry.timestamp}
          >
            {entry.text}
          </div>
        ))}
        {!!pending && <div className="h-6 px-4 py-1 bg-gray-400 animate-pulse rounded" />}
      </div>
      <form
        className="flex flex-col justify-stretch p-4 rounded border mt-4"
        onSubmit={uploadMessage}
      >
        <textarea
          className="bg-none"
          name="inputText"
          placeholder="Type your message here..."
          rows={3}
        />
        <input type="hidden" name="sessionId" value={sessionId} />
        <nav className="flex flex-row no-wrap items-center justify-end gap-2 mt-2">
          <button
            aria-label="Send message"
            className="flex flex-row no-wrap items-center gap-2 px-2 py-1 rounded bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!!pending}
            type="submit"
          >
            <Send />
            <span>Submit</span>
          </button>
        </nav>
      </form>
      <input type="file" ref={ ref => {
        if (!ref) return;
        ref.click();
      }} />
    </div>
  );
}
