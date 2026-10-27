import { getArticleById } from "@/app/features/articles/api/articles.api";
import { notFound } from "next/navigation";
import LoadingState from "@/app/components/molecules/LoadingState/LoadingState";

interface ArticleDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

function formatDate(date: string | null | undefined ): string {
  if (!date) {
    return "تاریخ تعریف نشده است."
  }
  const parseDate = new Date(date);

  if (Number.isNaN(parseDate.getTime())) {
    return "تاریخ نامعتبر است"
  }

  return new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parseDate)
}

function formatArticleContent(content: string) {
  return content
    .replace(/<[^>]*>/g, "")
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { id } = await params;

  const articleId = Number(id);

  if (Number.isNaN(articleId)) {
    notFound();
  }

  const response = await getArticleById(articleId);

  if (!response || !response.success || !response.data) {
    notFound();
  }

  const article = response.data;
  const contentParagraphs = formatArticleContent(article.content);

  return (
    <section dir="rtl" className="min-h-screen ">

      <div className="relative overflow-hidden bg-[#171B3A]">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#6C63FF]/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#38C9BE]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1100px] px-5 py-10 sm:px-8 sm:py-14">
          <div className="max-w-[850px]">
            <span className="inline-flex rounded-full bg-[#6C63FF]/20 px-4 py-2 text-[11px] font-bold text-[#C9C5FF]">
              مقاله آموزشی
            </span>

            <h1 className="mt-5 text-[28px] font-extrabold leading-[1.75] text-white sm:text-[40px] sm:leading-[1.65]">
              {article.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[#B8BDD5]">
              <span>
                {formatDate(article.created_at)}
              </span>

              <span className="h-1 w-1 rounded-full bg-[#6C63FF]" />

              <span>
                {article.user.full_name}
              </span>

              <span className="h-1 w-1 rounded-full bg-[#6C63FF]" />

              <span>
                {article.likes_count} لایک
              </span>

              <span className="h-1 w-1 rounded-full bg-[#6C63FF]" />

              <span>
                {article.comments_count} نظر
              </span>
            </div>
          </div>
        </div>
      </div>


      <section className="px-5 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">

            <article className="rounded-[28px] border border-[#E9EAF2] bg-white shadow-[0_10px_35px_rgba(23,27,58,0.05)]">
              <div className="p-6 sm:p-8 lg:p-10">

                {article.meta_description && (
                  <div className="mb-7 rounded-2xl border-r-4 border-[#6C63FF] bg-[#F5F3FF] px-5 py-4">
                    <p className="text-[13px] leading-7 text-[#5E6378]">
                      {article.meta_description}
                    </p>
                  </div>
                )}


                <div className="space-y-5">
                  {contentParagraphs.map(
                    (paragraph, index) => {
                      const isQuestion =
                        paragraph.includes("؟");

                      return (
                        <div key={index}>
                          {isQuestion ? (
                            <h2 className="mb-3 border-r-4 border-[#6C63FF] pr-4 text-[18px] font-extrabold leading-8 text-[#20243D] sm:text-[20px]">
                              {paragraph}
                            </h2>
                          ) : (
                            <p className="text-[14px] leading-[2.2] text-[#555A6F] sm:text-[15px]">
                              {paragraph}
                            </p>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>


                {article.tags.length > 0 && (
                  <div className="mt-8 border-t border-[#EFF0F4] pt-6">
                    <h2 className="mb-3 text-[14px] font-extrabold text-[#20243D]">
                      برچسب‌های مقاله
                    </h2>

                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#F1F2F7] px-4 py-2 text-[11px] text-[#656B7E]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}


                {article.categories.length > 0 && (
                  <div className="mt-6">
                    <h2 className="mb-3 text-[14px] font-extrabold text-[#20243D]">
                      دسته‌بندی
                    </h2>

                    <div className="flex flex-wrap gap-2">
                      {article.categories.map(
                        (category) => (
                          <span
                            key={category}
                            className="rounded-full bg-[#EEECFF] px-4 py-2 text-[11px] font-bold text-[#655DD0]"
                          >
                            {category}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}


                {article.skills.length > 0 && (
                  <div className="mt-6">
                    <h2 className="mb-3 text-[14px] font-extrabold text-[#20243D]">
                      مهارت‌های مرتبط
                    </h2>

                    <div className="flex flex-wrap gap-2">
                      {article.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-[#EAF8F5] px-4 py-2 text-[11px] font-bold text-[#328C82]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>


            <aside className="space-y-4">

              <div className="rounded-[24px] border border-[#E9EAF2] bg-white p-5 shadow-[0_8px_30px_rgba(23,27,58,0.04)]">
                <p className="mb-4 text-[12px] font-bold text-[#8A8FA2]">
                  نویسنده مقاله
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEECFF] text-lg font-extrabold text-[#655DD0]">
                    {article.user.full_name?.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h2 className="truncate text-[14px] font-extrabold text-[#20243D]">
                      {article.user.full_name}
                    </h2>

                    <p className="mt-1 text-[11px] leading-5 text-[#85899B]">
                      {article.user.headline}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#F7F5FF] px-3 py-3 text-center">
                    <p className="text-[18px] font-extrabold text-[#655DD0]">
                      {article.user.followers_count}
                    </p>

                    <p className="mt-1 text-[10px] text-[#85899B]">
                      دنبال‌کننده
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F0FAF8] px-3 py-3 text-center">
                    <p className="text-[18px] font-extrabold text-[#328C82]">
                      {article.user.followings_count}
                    </p>

                    <p className="mt-1 text-[10px] text-[#85899B]">
                      دنبال‌شونده
                    </p>
                  </div>
                </div>
              </div>


              <div className="rounded-[24px] border border-[#E9EAF2] bg-white p-5 shadow-[0_8px_30px_rgba(23,27,58,0.04)]">
                <p className="mb-4 text-[12px] font-bold text-[#8A8FA2]">
                  درباره این مقاله
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between rounded-2xl bg-[#FFF3F6] px-4 py-3">
                    <span className="text-[11px] text-[#777C8F]">
                      تعداد لایک
                    </span>

                    <span className="text-[13px] font-extrabold text-[#D96A8B]">
                      {article.likes_count}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-[#F2F4FF] px-4 py-3">
                    <span className="text-[11px] text-[#777C8F]">
                      تعداد نظرات
                    </span>

                    <span className="text-[13px] font-extrabold text-[#6672D4]">
                      {article.comments_count}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-[#F1FAF7] px-4 py-3">
                    <span className="text-[11px] text-[#777C8F]">
                      وضعیت ذخیره
                    </span>

                    <span className="text-[11px] font-bold text-[#328C82]">
                      {article.is_saved
                        ? "ذخیره شده"
                        : "ذخیره نشده"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-[#FFF7ED] px-4 py-3">
                    <span className="text-[11px] text-[#777C8F]">
                      وضعیت لایک
                    </span>

                    <span className="text-[11px] font-bold text-[#C17A35]">
                      {article.is_liked
                        ? "لایک شده"
                        : "لایک نشده"}
                    </span>
                  </div>
                </div>
              </div>


              <div className="rounded-[24px] bg-[#171B3A] p-5 text-white">
                <p className="text-[11px] text-[#9FA5C2]">
                  تاریخ انتشار
                </p>

                <p className="mt-2 text-[14px] font-bold">
                  {formatDate(article.created_at)}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </section>
  );
}