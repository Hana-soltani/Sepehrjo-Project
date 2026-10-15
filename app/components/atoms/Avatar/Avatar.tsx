import Image from "next/image";

interface AvatarProps {
  src?: string | null;
  alt?: string;
  fallback?: string;
  size?: number;
}

export default function Avatar({
  src,
  alt = "آواتار کاربر",
  fallback = "س",
  size = 48,
}: AvatarProps) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-2xl bg-[#E5F7F0]"
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-lg font-bold text-[#168579]">
          {fallback}
        </div>
      )}
    </div>
  );
}