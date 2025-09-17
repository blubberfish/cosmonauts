import { EditPencil, Mail, User as UserIcon } from "iconoir-react";

export interface UserProps {
  avatar?: string;
  email?: string;
  name?: string;
}

export function User({ avatar, email, name }: UserProps) {
  return (
    <section className="mx-8 my-6 flex flex-row flex-nowrap items-center rounded">
      <object
        className="aspect-square h-12 rounded-full overflow-hidden text-gray-300 from-gray-400 to-gray-600 bg-gradient-to-br flex items-center justify-center"
        data={avatar}
        title="User Avatar"
        type="image/png"
      >
        <UserIcon className="h-5" />
      </object>
      <div className="flex-1 ml-4">
        <p
          className={
            name
              ? "text-lg"
              : "my-1 h-4 w-[13ch] rounded bg-gray-400 animate-pulse"
          }
        >
          {name}
        </p>
        <p className="text-sm text-gray-300 flex flex-row flex-nowrap items-center gap-x-1">
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
      <a
        aria-label="view profile"
        className="aspect-square p-2 rounded-full text-white hover:text-blue-300 flex items-center justify-center"
        href="/dashboard/profile"
      >
        <EditPencil className="h-5" />
      </a>
    </section>
  );
}
