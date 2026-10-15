"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SearchInput from "@/app/components/molecules/SearchInput/SearchInput";
import PostList from "@/app/components/organisms/PostList/PostList";

export default function PostsPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden ">
      <section className="relative overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#DDF5EF] opacity-80 blur-3xl" />

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#EEE8FF] opacity-70 blur-3xl" />

        <div className="absolute right-1/3 top-10 h-32 w-32 rounded-full bg-[#F5EFFF] opacity-60 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:pb-20">
          <div className="overflow-hidden rounded-[36px] border border-[#DDEBE7] bg-gradient-to-br from-[#EFFAF7] via-white to-[#F5F1FF] shadow-[0_18px_60px_rgba(45,93,86,0.08)]">
            <div className="grid items-center gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_360px] lg:px-14 lg:py-14">
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4EAE5] bg-white/80 px-4 py-2 text-xs font-bold text-[#168579] shadow-sm backdrop-blur">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0F5F0]">
                    ✦
                  </span>

                  جامعه سپهرجو
                </div>

                <h1 className="text-3xl font-black leading-[1.35] tracking-tight text-[#263B40] sm:text-4xl lg:text-[48px]">
                  جایی برای
                  <br />
                  <span className="text-[#168579]">
                    تجربه‌ها و ایده‌ها
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-8 text-[#718488] sm:text-base">
                  تجربه‌ها، ایده‌ها و دانسته‌های خودت را با دیگران به اشتراک
                  بگذار، از تجربه‌های جامعه یاد بگیر و در مسیر رشد همراه ما
                  باش.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="#posts"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-[#168579] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(22,133,121,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#117468] hover:shadow-[0_16px_30px_rgba(22,133,121,0.25)]"
                  >
                    کشف پست‌ها
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                      ←
                    </span>
                  </Link>

                  <Link
                    href="/post"
                    className="inline-flex items-center gap-2 rounded-2xl border border-[#DDE7E4] bg-white/80 px-6 py-3.5 text-sm font-bold text-[#687B7F] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#D0DCD9] hover:text-[#168579]"
                  >
                    همه پست‌ها
                  </Link>
                </div>
              </div>

              <div className="relative hidden h-64 lg:block">
                <div className="absolute right-4 top-5 h-52 w-72 rounded-[32px] bg-white/80 shadow-[0_20px_45px_rgba(43,82,76,0.1)] backdrop-blur">
                  <div className="absolute right-6 top-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E0F5F0] text-xl text-[#168579]">
                      ✎
                    </div>

                    <div>
                      <div className="h-2.5 w-28 rounded-full bg-[#DCEBE8]" />
                      <div className="mt-2 h-2 w-20 rounded-full bg-[#EEF3F2]" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-6 left-6 space-y-3">
                    <div className="h-3 rounded-full bg-[#EAF4F2]" />
                    <div className="h-3 w-4/5 rounded-full bg-[#EEF3F2]" />

                    <div className="flex gap-2 pt-2">
                      <span className="h-7 w-16 rounded-full bg-[#E5F6F1]" />
                      <span className="h-7 w-20 rounded-full bg-[#F0EAFE]" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-4 flex h-20 w-20 rotate-6 items-center justify-center rounded-[24px] bg-[#7657C8] text-3xl text-white shadow-[0_15px_30px_rgba(118,87,200,0.25)]">
                  ✦
                </div>

                <div className="absolute right-0 top-0 flex h-14 w-14 -rotate-6 items-center justify-center rounded-2xl bg-[#168579] text-xl text-white shadow-[0_12px_25px_rgba(22,133,121,0.22)]">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="posts" className="relative pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-6 max-w-[420px]">
            <SearchInput placeholder="جستجوی پست..." />
          </div>

          <PostList search={search} />
        </div>
      </section>
    </main>
  );
}