import { Mail, User as UserIcon } from "iconoir-react";

export interface UserProps {
  avatar?: string;
  email?: string;
  name?: string;
}

export function User({ avatar, email, name }: UserProps) {
  return (
    <section className="flex flex-row flex-nowrap items-center rounded">
      <object
        className="size-9 rounded-full overflow-hidden text-gray-300 from-gray-400 to-gray-600 bg-gradient-to-br flex items-center justify-center"
        data={avatar}
        title="User Avatar"
        type="image/png"
      >
        <UserIcon className="h-5" />
      </object>
      <div className="flex-1 ml-3">
        <p
          className={
            name
              ? "text-base"
              : "my-1 h-4 w-[13ch] rounded bg-gray-400 animate-pulse"
          }
        >
          {name}
        </p>
        <p className="text-sm text-gray-400 flex flex-row flex-nowrap items-center gap-x-1">
          <Mail className="inline h-4" />
          <span
            className={
              email
                ? ""
                : "inline-block h-4 my-1 w-[10ch] rounded bg-gray-400 animate-pulse"
            }
          >
            {email}
          </span>
        </p>
      </div>
    </section>
  );
}
