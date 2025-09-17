"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface UsePromiseOptions<T = unknown> {
  diff?: {
    (...items: (T | undefined)[]): boolean;
  };
  initial?: Promise<T>;
}

type PromiseLock<T> = Promise<{
  id: string;
  spec: "promise-lock@1.0";
  result: T;
}>;

export function usePromise<T = unknown>(options?: UsePromiseOptions<T>) {
  const lock = useRef<string>("");
  const [future, setFuture] = useState<PromiseLock<T>>();
  const [resolved, setResolved] = useState<T>();

  const setPromise = useCallback((promised: Promise<T>) => {
    const id = crypto.randomUUID();
    lock.current = id;
    setFuture(
      promised.then((data) => ({ id, spec: "promise-lock@1.0", result: data }))
    );
  }, []);

  useEffect(() => {
    if (!future) return;
    let abort = false;
    const diff = options?.diff;
    const verifier = lock.current;
    future.then(({ id, result }) => {
      if (abort) return;
      if (id !== verifier) return;
      setFuture(undefined);
      setResolved((current) => {
        if (!diff) return result;
        if (diff(current, result)) return result;
        return current;
      });
    });
    return () => {
      abort = true;
    };
  }, [future, options?.diff]);

  useEffect(() => {
    const initial = options?.initial;
    if (!initial) return;
    setPromise(initial);
  }, [options?.initial, setPromise]);

  const state = {
    loading: !!future,
    data: resolved,
  };

  return [state, setPromise] as [typeof state, typeof setPromise];
}
