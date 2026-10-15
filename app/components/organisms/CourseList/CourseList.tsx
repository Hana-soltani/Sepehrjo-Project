import Link from "next/link";
import type { Course } from "@/app/features/courses/types/courses.types";
import CourseCard from "../CourseCard/CourseCard";

interface CourseListProps {
  courses: Course[];
  limit?: number;
  showHeader?: boolean;
}

export default function CourseList({
  courses,
  limit,
  showHeader = true,
}: CourseListProps) {
  const visibleCourses =
    limit !== undefined
      ? courses.slice(0, limit)
      : courses;

  if (visibleCourses.length === 0) {
    return (
      <section
        dir="rtl"
        className="bg-[#FAFCFB] py-12"
      >
        <div className="rounded-[28px] border border-[#E8E2FA] bg-white p-10 text-center">
          <p className="font-bold text-[#5D696E]">
            دوره‌ای برای نمایش وجود ندارد.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section dir="rtl" className=" px-4 py-12" >
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <div className="mb-8 flex items-center text-center justify-center gap-6">
            <div>
              <span className="inline-flex rounded-full bg-[#EEE8FF] px-4 py-2 text-xs font-bold text-[#6254D9]">
                مسیر یادگیری
              </span>

              <h2 className="mt-4 text-3xl font-black text-[#263B40]">
                دوره‌های آموزشی
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#7B858A]">
                دوره مناسب خودت را انتخاب کن و یادگیری را شروع کن.
              </p>
            </div>

            {limit !== undefined && courses.length > limit && (
              <Link
                href="/courses"
                className="hidden rounded-2xl bg-[#EEE8FF] px-5 py-3 text-sm font-bold text-[#6254D9] transition hover:bg-[#6254D9] hover:text-white md:block"
              >
                مشاهده همه
              </Link>
            )}
          </div>
        )}

        <div className="mx-auto flex max-w-5xl flex-col gap-5">
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}