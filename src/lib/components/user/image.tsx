import { User } from "@deemlol/next-icons";

export interface UserImageProps {
  className?: string;
  src?: string | null;
  type?: string;
}

export function UserImage({ className, src, type }: UserImageProps) {
  return (
    <object
      className={className || "aspect-square h-12 rounded-full overflow-hidden from-sky-500 to-sky-600 bg-linear-to-tl"}
      data={src || ""}
      type={type || "image/png"}
    >
      <div className="h-full w-full from-gray-400 to-gray-500 bg-linear-to-br flex items-center justify-center">
        <User />
      </div>
    </object>
  );
}
