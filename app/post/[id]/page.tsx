import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById } from "@/app/features/posts/api/posts.api";
import type { Post } from "@/app/features/posts/types/posts.types";

interface PostDetailPageProps {
  params: Promise<{
    id: string;
  }>;
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

export default async function PostDetailPage({
  params,
}: PostDetailPageProps) {
  const { id } = await params;

  const postId = Number(id);

  if (Number.isNaN(postId)) {
    notFound();
  }

  let post: Post | null = null;

  try {
    const response = await getPostById(postId);

    if (!response || !response.success || !response.data) {
      notFound();
    }

    post = response.data;
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#F4F9F8] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <Link
            href="/post"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#168579] transition hover:text-[#0F665D]"
          >
            <span>→</span>
            بازگشت به پست‌ها
          </Link>
        </div>

        <article className="overflow-hidden rounded-[28px] border border-[#DFECE9] bg-white shadow-[0_10px_40px_rgba(27,88,80,0.07)]">
          <div className="border-b border-[#EEF3F2] p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#DDF4EE] text-lg font-black text-[#168579]">
                  {post.user_full_name?.charAt(0) || "؟"}
                </div>

                <div className="min-w-0">
                  <h1 className="truncate text-sm font-extrabold text-[#193D49] sm:text-base">
                    {post.user_full_name}
                  </h1>

                  {post.user_headline && (
                    <p className="mt-1 truncate text-xs text-[#829397] sm:text-sm">
                      {post.user_headline}
                    </p>
                  )}
                </div>
              </div>

              <span className="shrink-0 text-[11px] font-medium text-[#9AA9AC] sm:text-xs">
                {formatDate(post.created_at)}
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            {post.description ? (
              <p className="whitespace-pre-line text-sm leading-8 text-[#405960] sm:text-[15px]">
                {post.description}
              </p>
            ) : (
              <p className="text-sm italic text-[#A0AFB1]">
                این پست توضیحی ندارد.
              </p>
            )}

            {Array.isArray(post.skills) && post.skills.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F0F8F6] px-3 py-1.5 text-xs font-semibold text-[#168579]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          {Array.isArray(post.media) && post.media.length > 0 && (
            <div className="border-t border-[#EEF3F2] bg-[#FAFCFB] p-4 sm:p-6">
              <div className="grid gap-3">
                {post.media.map((media) => (
                  <div
                    key={media.id}
                    className="flex min-h-32 items-center justify-center rounded-2xl bg-[#F1F6F5]"
                  >
                    <div className="text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                        🖼️
                      </div>

                      <p className="mt-3 text-xs font-semibold text-[#829397]">
                        تصویر پست
                      </p>

                      <p className="mt-1 text-[10px] text-[#A5B1B3]">
                        تصویر در حال حاضر قابل نمایش نیست
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-[#EEF3F2] px-5 py-4 sm:px-7">
            <div className="flex items-center gap-5 text-xs text-[#829397]">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-base">♡</span>
                {post.likes_count}
              </span>

              <span className="inline-flex items-center gap-1.5">
                <span className="text-base">◌</span>
                {post.comments_count}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  post.is_published
                    ? "bg-[#36B37E]"
                    : "bg-[#D8A63E]"
                }`}
              />

              <span className="text-xs font-semibold text-[#829397]">
                {post.is_published
                  ? "منتشر شده"
                  : "منتشر نشده"}
              </span>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}