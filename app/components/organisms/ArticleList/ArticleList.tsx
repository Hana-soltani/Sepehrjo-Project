import Link from "next/link";
import type { Article } from "@/app/features/articles/types/articles.types";
import ArticleCard from "../ArticleCard/ArticleCard";
import {MoveLeft} from 'lucide-react'

interface ArticleListProps {
    articles: Article[];
}


export default function ArticleList({
    articles,
}: ArticleListProps) {
    const visibleArticles = articles.slice(0, 4);

    return (
        <section dir="rtl" className="bg-white px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
            <div className="mx-auto max-w-[1200px]">

                <div className="mb-8 text-center">
                    <span className="mb-4 inline-flex rounded-full bg-[#F0EEFF] px-4 py-2 text-[11px] font-bold text-[#6254D9]">
                        مقالات آموزشی
                    </span>

                    <h2 className="text-[28px] font-extrabold text-[#173563] sm:text-[32px]">
                        آخرین مقالات
                    </h2>

                    <p className="mx-auto mt-3 max-w-[600px] text-[12px] leading-6 text-[#7B829A] sm:text-[13px]">
                        مقالات آموزشی، راهنماها و نکات کاربردی برای یادگیری بهتر
                    </p>
                </div>

                <div className="mb-5 hidden justify-end sm:flex">
                    <Link
                        href="/articles"
                        className="flex h-10 w-32 items-center justify-center gap-2 rounded-xl bg-[#6254D9] text-[16px] font-bold text-white transition-opacity hover:opacity-70"
                    >
                        مشاهده همه
                        <MoveLeft />
                    </Link>
                </div>

                {visibleArticles.length > 0 ? (
                    <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {visibleArticles.map((article) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-[20px] bg-[#F7F7FC] py-16 text-center text-sm text-[#7B829A]">
                        هنوز مقاله‌ای منتشر نشده است.
                    </div>
                )}


                <div className="mt-7 flex justify-center sm:hidden">
                    <Link
                        href="/articles"
                        className="rounded-full bg-[#F0EEFF] px-5 py-2.5 text-[12px] font-bold text-[#6254D9]"
                    >
                        مشاهده همه مقالات ←
                    </Link>
                </div>



            </div>
        </section>
    );
}