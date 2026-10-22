import Link from "next/link";
import type { Article } from "@/app/features/articles/types/articles.types";
import { MoveLeft } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Heart } from 'lucide-react';
import { getFileUrl } from "@/app/lib/file-url";

interface ArticleCardProps {
  article: Article;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
    month: "long",
  }).format(new Date(date));
}

export default function ArticleCard({
  article,

}: ArticleCardProps) {
  const articleImageUrl = getFileUrl(article.image);
  const authorAvatarUrl = getFileUrl(article.user.avatar);
  return (
    <article dir="rtl" className="group  flex h-full overflow-hidden rounded-[20px] border border-[#E9EAF5] bg-white shadow-[0_6px_22px_rgba(67,65,140,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(67,65,140,0.12)]">
      <Link
        href={`/articles/${article.id}`}
        className="flex h-full w-full flex-col"
      >

        <div className="relative h-[190px] w-full shrink-0 overflow-hidden bg-[#EEF0FF]">
          {articleImageUrl ? (
            <img
              src={articleImageUrl}
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-medium text-[#8B84C8]">
              تصویر مقاله
            </div>
          )}

          <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#6254D9] shadow-sm">
            مقاله آموزشی
          </span>
        </div>


        <div className="flex flex-1 flex-col p-5">
          <h2 className="line-clamp-2 min-h-[56px] text-[17px] font-extrabold leading-7 text-[#173563]">
            {article.title}
          </h2>

          {article.meta_description ? (
            <p className="mt-3 line-clamp-3 min-h-[72px] text-[12px] leading-6 text-[#7B829A]">
              {article.meta_description}
            </p>
          ) : (
            <p className="mt-3 line-clamp-3 min-h-[72px] text-[12px] leading-6 text-[#7B829A]">
              برای مطالعه بیشتر و آشنایی با نکات کاربردی این مقاله همراه ما باشید.
            </p>
          )}


          <div className="mt-auto border-t border-[#F0F1F6] pt-4">

            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#EEEAFE]">
                {authorAvatarUrl ? (
                  <img
                    src={authorAvatarUrl}
                    alt={article.user.full_name || "نویسنده مقاله"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[11px] font-bold text-[#6254D9]">
                    {article.user.full_name?.charAt(0) || "ن"}
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <p className="truncate text-[11px] font-bold text-[#173563]">
                  {article.user.full_name}
                </p>

                <p className="mt-0.5 text-[10px] text-[#9298AA]">
                  {formatDate(article.created_at)}
                </p>
              </div>
            </div>


            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4 text-[11px] text-[#8A91A8]">
                <span className="flex items-center gap-1">
                  <Heart className="text-[18px] text-[#A69BF0]" />
                  {article.likes_count}
                </span>

                <span className="flex items-center gap-1">
                  <MessageCircle className="text-[16px] text-[#A69BF0]" />
                  {article.comments_count}
                </span>
              </div>

              <MoveLeft className="text-[#6254D9]" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}