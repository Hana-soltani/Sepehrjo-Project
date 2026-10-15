"use client";

import Link from "next/link";
import EmptyState from "@/app/components/molecules/EmptyState/EmptyState";
import ErrorState from "@/app/components/molecules/ErrorState/ErrorState";
import LoadingState from "@/app/components/molecules/LoadingState/LoadingState";
import { usePosts } from "@/app/features/posts/hooks/usePosts";
import PostCard from "../PostCard/PostCard";

interface PostListProps {
  limit?: number;
  showHeader?: boolean;
  search?: string;
}

export default function PostList({
  limit,
  showHeader = true,
  search = "",
}: PostListProps) {
  const { data, isLoading, isError, refetch } = usePosts();

  const posts = data?.data ?? [];

  const filteredPosts = search.trim()
    ? posts.filter((post) => {
      const value = search.trim().toLowerCase();

      return (
        post.description?.toLowerCase().includes(value) ||
        post.user_full_name?.toLowerCase().includes(value) ||
        post.user?.toLowerCase().includes(value) ||
        post.user_headline?.toLowerCase().includes(value) ||
        post.skills?.some((skill) =>
          skill.toLowerCase().includes(value)
        )
      );
    })
    : posts;

  const visiblePosts =
    limit !== undefined
      ? filteredPosts.slice(0, limit)
      : filteredPosts;

  return (
    <section dir="rtl" className="bg-[#F4F9F8] px-4 py-14 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="xl:mr-10 -mt-6">
              <span className="inline-flex rounded-full border border-[#D4EBE5] bg-white px-4 py-2 text-[11px] font-bold text-[#6254D9]">
                جامعه سپهرجو
              </span>

              <h2 className="mt-4 text-3xl font-black text-[#193D49] lg:text-3xl">
                پست‌های اعضای سپهرجو
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#758B90]">
                تجربه‌ها، ایده‌ها و مطالب منتشرشده توسط اعضای جامعه سپهرجو
              </p>
            </div>

            {limit !== undefined && posts.length > limit && (
              <Link
                href="/post"
                className="self-start rounded-xl bg-[#6254D9] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#168579] lg:self-auto xl:ml-10"
              >
                مشاهده همه پست‌ها
              </Link>
            )}
          </div>
        )}

        {isLoading && (
          <LoadingState message="در حال دریافت پست‌ها..." />
        )}

        {isError && (
          <ErrorState
            message="دریافت پست‌ها با خطا مواجه شد."
            onRetry={refetch}
          />
        )}


        {!isLoading && !isError && filteredPosts.length === 0 && (

          <EmptyState message="پستی با این عبارت پیدا نشد." />

        )}

        {!isLoading && !isError && visiblePosts.length > 0 && (
          <div className="mx-auto grid w-fit grid-cols-1 justify-items-center gap-5 md:grid-cols-3 md:gap-4">
            {visiblePosts.map((post) => (
              <div
                key={post.id}
                className="w-full max-w-[360px] md:max-w-none"
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}