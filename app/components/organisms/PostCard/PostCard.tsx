import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/app/features/posts/types/posts.types";
import { getFileUrl } from "@/app/features/posts/utils/getFileUrl";

interface PostCardProps {
  post: Post;
}

function formatDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "تاریخ نامشخص";
  }

  return new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

export default function PostCard({ post }: PostCardProps) {
  const imageMedia = post.media?.find(
    (item) => item.media_type?.toLowerCase() === "image"
  );

  const avatarUrl = getFileUrl(post.user_avatar);
  const mediaUrl = getFileUrl(imageMedia?.media_file);
  console.log("POST IMAGE URLS", {
    avatarUrl,
    mediaUrl,
  });

  return (
    <article dir="rtl" className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DDEEEB] bg-white shadow-[0_8px_30px_rgba(27,100,91,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DED7] xl:w-80">
      <div className="h-1 bg-gradient-to-l from-[#6254D9] via-[#55C8B6] to-[#D3F2E9]" />

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-[#E5F7F0]">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={post.user_full_name || post.user}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-lg font-bold text-[#168579]">
                {post.user_full_name?.charAt(0) ||
                  post.user?.charAt(0) ||
                  "س"}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold text-[#193D49]">
              {post.user_full_name || post.user}
            </p>

            <p className="mt-1 text-xs text-[#82969B]">
              {formatDate(post.created_at)}
            </p>
          </div>
        </div>

        <Link href={`/post/${post.id}`} className="mt-5 block">
          <p className="h-[112px] overflow-hidden whitespace-pre-line break-words text-sm leading-7 text-[#52676D] transition-colors group-hover:text-[#193D49]">
            {post.description}
          </p>

          {mediaUrl && (
            <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-2xl bg-[#F0F7F5]">
              <img
                src={mediaUrl}
                alt={`تصویر پست ${post.id}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          )}
        </Link>

        <div className="mt-auto flex items-center gap-5 border-t border-[#EAF1EF] pt-4">
          <span className="text-xs text-[#82969B]">
            ♡ {post.likes_count} لایک
          </span>

          <span className="text-xs text-[#82969B]">
            ◯ {post.comments_count} نظر
          </span>

          <Link
            href={`/post/${post.id}`}
            className="mr-auto text-xs font-extrabold text-[#168579] transition-colors hover:text-[#193D49]"
          >
            مشاهده پست ←
          </Link>
        </div>
      </div>
    </article>
  );
}