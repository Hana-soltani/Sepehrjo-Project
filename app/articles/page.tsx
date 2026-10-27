import { getArticles } from "../features/articles/api/articles.api";
import EmptyState from "../components/molecules/EmptyState/EmptyState";
import SearchInput from "../components/molecules/SearchInput/SearchInput";
import ArticleList from "../components/organisms/ArticleList/ArticleList";
import {Check } from 'lucide-react';
import {Heart} from 'lucide-react';
import {Pencil} from 'lucide-react';
import {Sparkles} from 'lucide-react'

interface ArticlesPageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function ArticlesPage({
  searchParams,
}: ArticlesPageProps) {
  const params = await searchParams;
  const search = params.search ?? "";

  const response = await getArticles(search);

  return (
    <section dir="rtl" className="min-h-screen overflow-hidden ">
      <div className="relative overflow-hidden px-5 py-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E7E1FF] opacity-70" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E2F0FF] opacity-70" />
        <div className="absolute bottom-[-100px] right-[25%] h-56 w-56 rounded-full bg-[#FFE9F1] opacity-60" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#DDD7FF] bg-white px-5 py-2.5 text-[13px] font-bold text-[#6254D9] shadow-[0_5px_20px_rgba(98,84,217,0.08)] lg:text-[14px]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F0EEFF]">
                  <Sparkles />
                </span>
                دنیای یادگیری داناجو
              </span>
            </div>

            <h1 className="text-[32px] font-extrabold leading-[1.7] text-[#243B5A]">
              جایی برای{" "}
              <span className="text-[#6254D9]">یادگیری</span>، رشد و کشف چیزهای
              جدید
            </h1>

            <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-8 text-[#667085] lg:text-[15px]">
              اینجا می‌تونی مجموعه‌ای از مقاله‌های آموزشی و مطالب کاربردی رو
              پیدا کنی؛ مطالبی که قراره یادگیری رو برات ساده‌تر، جذاب‌تر و
              لذت‌بخش‌تر کنن.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[#E5E0FF] bg-white px-4 py-2.5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F0EEFF] text-[#6254D9]">
                  <Sparkles />
                </span>

                <span className="text-[11px] font-bold text-[#526078]">
                  مطالب کاربردی
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#DDEBFF] bg-white px-4 py-2.5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF3FF] text-[#4D82C4]">
                  <Check className="w-5" />
                </span>

                <span className="text-[11px] font-bold text-[#526078]">
                  یادگیری آسان
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#DDF1E7] bg-white px-4 py-2.5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF8F2] text-[#4D9B73]">
                  <Heart className="w-4" />
                </span>

                <span className="text-[11px] font-bold text-[#526078]">
                  برای تو نوشته شده
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-16 pt-6">
        <div className="mx-auto max-w-[1200px]">

          <div className="mb-5 max-w-[420px]">
            <SearchInput placeholder="جستجوی مقاله..." />
          </div>

          <div className="mb-8 flex items-center justify-between rounded-[24px] border border-[#ECECF5] bg-white px-5 py-5 shadow-[0_8px_30px_rgba(67,65,140,0.05)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0EEFF] text-[20px] text-[#6254D9]">
                <Pencil />
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#8B91A5]">
                  تازه‌ترین مطالب
                </span>

                <h2 className="mt-1 text-[19px] font-extrabold text-[#243B5A]">
                  آخرین مقالات
                </h2>
              </div>
            </div>

            <div className="rounded-full bg-[#F7F5FF] px-4 py-2 text-[11px] font-bold text-[#6254D9]">
              {response.data.length} مقاله
            </div>
          </div>

          {response.data.length === 0 ? (
            <div className="rounded-[28px] border border-[#E8E7F2] bg-white text-black p-8 shadow-[0_8px_30px_rgba(67,65,140,0.05)]">
              <EmptyState message="مقاله‌ای برای نمایش وجود ندارد." />
            </div>
          ) : (
            <div className="rounded-[30px] border border-[#E8E7F2] bg-white p-5 shadow-[0_10px_35px_rgba(67,65,140,0.06)]">
              <ArticleList articles={response.data} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}