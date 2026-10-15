import Link from "next/link";
import type { Course } from "@/app/features/courses/types/courses.types";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group">
      <Link
        href={`/courses/${course.id}`}
        className="flex flex-col overflow-hidden rounded-[28px] border border-[#E8E2FA] bg-white shadow-[0_8px_30px_rgba(98,84,217,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8CEF7] hover:shadow-[0_18px_45px_rgba(98,84,217,0.12)] md:flex-row"
      >
     
        <div className="relative h-56 shrink-0 overflow-hidden bg-[#EEE8FF] md:h-auto md:w-[280px] lg:w-[320px]">
          {course.image && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url("https://stg-api.sepehrjou.ir/${course.image.replace(
                  /^\/+/,
                  ""
                )}")`,
              }}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#31255F]/45 via-transparent to-transparent" />

          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#6254D9] backdrop-blur-sm">
            دوره آموزشی
          </span>

          {course.publishing_soon_status !== 0 && (
            <span className="absolute bottom-4 right-4 rounded-full bg-[#263B40]/85 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
              به‌زودی
            </span>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-5 md:p-6">
          <div>
            <h2 className="line-clamp-2 text-lg font-black leading-8 text-[#263B40] transition-colors group-hover:text-[#6254D9]">
              {course.title}
            </h2>

            {course.meta_description && (
              <p className="mt-2 line-clamp-2 text-sm leading-7 text-[#7B858A]">
                {course.meta_description}
              </p>
            )}
          </div>

          <div className="mt-5 flex items-center gap-3 border-b border-[#F0EDF8] pb-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#EEE8FF] font-black text-[#7657C8]">
              {course.user.full_name?.charAt(0) || "م"}
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#90969A]">
                مدرس دوره
              </p>

              <p className="truncate text-sm font-bold text-[#394A50]">
                {course.user.full_name}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-2xl bg-[#FAF9FE] px-4 py-3 text-center">
                <p className="text-[11px] text-[#90969A]">
                  دانشجو
                </p>

                <p className="mt-1 text-sm font-black text-[#6254D9]">
                  {course.students_count}
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF9FE] px-4 py-3 text-center">
                <p className="text-[11px] text-[#90969A]">
                  لایک
                </p>

                <p className="mt-1 text-sm font-black text-[#6254D9]">
                  {course.likes_count}
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF9FE] px-4 py-3 text-center">
                <p className="text-[11px] text-[#90969A]">
                  نظر
                </p>

                <p className="mt-1 text-sm font-black text-[#6254D9]">
                  {course.comments_count}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#90969A]">
                  قیمت
                </p>

                <p className="mt-1 font-black text-[#263B40]">
                  {course.price === 0
                    ? "رایگان"
                    : `${course.price.toLocaleString("fa-IR")} تومان`}
                </p>
              </div>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEE8FF] text-xl font-bold text-[#6254D9] transition-all duration-300 group-hover:bg-[#6254D9] group-hover:text-white">
                ←
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}