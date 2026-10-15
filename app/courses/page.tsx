import SearchInput from "@/app/components/molecules/SearchInput/SearchInput";
import CourseList from "@/app/components/organisms/CourseList/CourseList";
import { getCourses } from "@/app/features/courses/api/courses.api";

export const revalidate = 60;

interface CoursesPageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function CoursesPage({
  searchParams,
}: CoursesPageProps) {
  const params = await searchParams;

  const search = params.search ?? "";

  const response = await getCourses(search);

  const courses = response.data ?? [];

  return (
    <main dir="rtl" className="min-h-screen ">
      <section className="bg-[#c7bee2] px-4 py-14 items-center justify-center text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold text-[#6254D9] shadow-sm">
            مسیر یادگیری
          </span>

          <h1 className="mt-5 text-2xl font-black leading-tight text-[#2a3f44] sm:text-4xl lg:text-5xl">
            دوره‌های آموزشی
          </h1>

        </div>
      </section>

      
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 justify-items-center max-w-[420px]">
            <SearchInput placeholder="جستجوی دوره..." />
          </div>

          <CourseList courses={courses} />
        </div>
      </section>
    </main>
  );
}