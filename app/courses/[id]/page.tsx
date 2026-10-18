import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseById } from "@/app/features/courses/api/courses.api";
import { getFileUrl } from "@/app/features/courses/utils/getFileUrl";

interface CourseDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { id } = await params;
  const courseId = Number(id);

  if (Number.isNaN(courseId)) {
    notFound();
  }

  const response = await getCourseById(courseId);

  if (!response.success || !response.data) {
    notFound();
  }

  const course = response.data;
  const imageUrl = getFileUrl(course.image);

  const totalSubsections = course.sections.reduce(
    (total, section) => total + section.subsections.length,
    0
  );

  return (
    <main dir="rtl" className="min-h-screen bg-[#FAFCFB]">
      <section className="relative overflow-hidden bg-[#EEE8FF] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#DCD7FF]" />
        <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#DDEBFF]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#6254D9]"
          >
            <span>→</span>
            بازگشت به دوره‌ها
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#6254D9]">
                  دوره آموزشی
                </span>

                {course.free_to_pay ? (
                  <span className="rounded-full bg-[#EAF7ED] px-4 py-2 text-xs font-bold text-[#4E9A5D]">
                    امکان شروع رایگان
                  </span>
                ) : null}

                {course.is_registered && (
                  <span className="rounded-full bg-[#E5F7F5] px-4 py-2 text-xs font-bold text-[#188F88]">
                    ثبت‌نام شده
                  </span>
                )}
              </div>

              <h1 className="mt-5 text-3xl font-black leading-[1.7] text-[#263B40] sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>

              {course.description && (
                <p className="mt-5 max-w-2xl whitespace-pre-line text-sm leading-8 text-[#68767B] sm:text-base">
                  {course.description}
                </p>
              )}


              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white font-black text-[#7657C8] shadow-sm">
                  {course.user.full_name?.charAt(0) || "م"}
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-[#90969A]">
                    مدرس دوره
                  </p>

                  <p className="mt-1 truncate font-bold text-[#394A50]">
                    {course.user.full_name}
                  </p>

                  {course.user.headline && (
                    <p className="mt-0.5 truncate text-xs text-[#90969A]">
                      {course.user.headline}
                    </p>
                  )}
                </div>
              </div>
            </div>


            <div className="relative overflow-hidden rounded-[32px] bg-white p-3 shadow-[0_20px_60px_rgba(98,84,217,0.15)]">
              {imageUrl ? (
                <div
                  className="min-h-[280px] rounded-[24px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${imageUrl}")`,
                  }}
                />
              ) : (
                <div className="flex min-h-[280px] items-center justify-center rounded-[24px] bg-[#EEE8FF]">
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-[24px] border border-[#E8E2FA] bg-white p-5 text-center">
                <p className="text-xs text-[#90969A]">دانشجو</p>
                <p className="mt-2 text-xl font-black text-[#6254D9]">
                  {course.students_count}
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E8E2FA] bg-white p-5 text-center">
                <p className="text-xs text-[#90969A]">لایک</p>
                <p className="mt-2 text-xl font-black text-[#6254D9]">
                  {course.likes_count}
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E8E2FA] bg-white p-5 text-center">
                <p className="text-xs text-[#90969A]">نظر</p>
                <p className="mt-2 text-xl font-black text-[#6254D9]">
                  {course.comments_count}
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E8E2FA] bg-white p-5 text-center">
                <p className="text-xs text-[#90969A]">مدت</p>
                <p className="mt-2 text-xl font-black text-[#6254D9]">
                  {course.total_duration || 0}
                </p>
              </div>
            </section>

            <section className="rounded-[32px] border border-[#E8E2FA] bg-white p-6 sm:p-8">
              <span className="text-sm font-bold text-[#7657C8]">
                درباره دوره
              </span>

              <h2 className="mt-2 text-2xl font-black text-[#263B40]">
                درباره این دوره
              </h2>

              {course.description ? (
                <p className="mt-5 whitespace-pre-line text-sm leading-9 text-[#68767B]">
                  {course.description}
                </p>
              ) : (
                <p className="mt-5 text-sm text-[#90969A]">
                  توضیحی برای این دوره ثبت نشده است.
                </p>
              )}
            </section>

            {course.introduction_video && (
              <section className="rounded-[32px] border border-[#E8E2FA] bg-white p-6 sm:p-8">
                <span className="text-sm font-bold text-[#7657C8]">
                  آشنایی با دوره
                </span>

                <h2 className="mt-2 text-2xl font-black text-[#263B40]">
                  ویدیوی معرفی
                </h2>

                <div className="mt-6 overflow-hidden rounded-3xl bg-[#263B40]">
                  <video
                    controls
                    className="aspect-video w-full"
                    src={course.introduction_video}
                  />
                </div>
              </section>
            )}

            {course.skills.length > 0 && (
              <section className="rounded-[32px] border border-[#E8E2FA] bg-white p-6 sm:p-8">
                <span className="text-sm font-bold text-[#7657C8]">
                  مهارت‌ها
                </span>

                <h2 className="mt-2 text-2xl font-black text-[#263B40]">
                  مهارت‌هایی که یاد می‌گیری
                </h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <span
                      key={`${skill}-${index}`}
                      className="rounded-xl bg-[#EEE8FF] px-4 py-2 text-sm font-bold text-[#6254D9]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {course.prerequesties && (
              <section className="rounded-[32px] border border-[#E8E2FA] bg-white p-6 sm:p-8">
                <span className="text-sm font-bold text-[#7657C8]">
                  پیش‌نیاز
                </span>

                <h2 className="mt-2 text-2xl font-black text-[#263B40]">
                  قبل از شروع چه چیزهایی لازم است؟
                </h2>

                <p className="mt-5 whitespace-pre-line text-sm leading-9 text-[#68767B]">
                  {course.prerequesties}
                </p>
              </section>
            )}

            {course.categories.length > 0 && (
              <section className="rounded-[32px] border border-[#E8E2FA] bg-white p-6 sm:p-8">
                <span className="text-sm font-bold text-[#7657C8]">
                  دسته‌بندی
                </span>

                <h2 className="mt-2 text-2xl font-black text-[#263B40]">
                  دسته‌بندی‌های دوره
                </h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {course.categories.map((category) => (
                    <span
                      key={category.id}
                      className="rounded-xl bg-[#F5F3FF] px-4 py-2 text-sm font-bold text-[#6254D9]"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              </section>
            )}

            <section className="rounded-[32px] border border-[#E8E2FA] bg-white p-6 sm:p-8">
              <span className="text-sm font-bold text-[#7657C8]">
                مسیر یادگیری
              </span>

              <h2 className="mt-2 text-2xl font-black text-[#263B40]">
                سرفصل‌های دوره
              </h2>

              <div className="mt-6 space-y-4">
                {course.sections.length === 0 ? (
                  <p className="text-sm text-[#90969A]">
                    هنوز سرفصلی برای این دوره ثبت نشده است.
                  </p>
                ) : (
                  course.sections.map((section, index) => (
                    <div
                      key={section.id}
                      className="rounded-2xl bg-[#FAF9FE] p-5"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEE8FF] text-sm font-black text-[#6254D9]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-[#394A50]">
                            {section.title}
                          </h3>

                          <p className="mt-2 text-xs text-[#90969A]">
                            {section.subsections.length} بخش آموزشی
                          </p>

                          {section.subsections.length > 0 && (
                            <div className="mt-4 space-y-2">
                              {section.subsections.map((subsection) => (
                                <div
                                  key={subsection.id}
                                  className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3"
                                >
                                  <div className="min-w-0">
                                    <p className="truncate text-sm font-bold text-[#394A50]">
                                      {subsection.title}
                                    </p>

                                    <p className="mt-1 text-xs text-[#90969A]">
                                      {subsection.content_type}
                                    </p>
                                  </div>

                                  <span className="shrink-0 text-xs font-bold text-[#6254D9]">
                                    {subsection.duration} دقیقه
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-[#E8E2FA] bg-white p-6">
                <p className="text-xs text-[#90969A]">
                  تعداد آزمون‌ها
                </p>

                <p className="mt-2 text-2xl font-black text-[#6254D9]">
                  {course.total_quizes}
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E8E2FA] bg-white p-6">
                <p className="text-xs text-[#90969A]">
                  تعداد تکالیف
                </p>

                <p className="mt-2 text-2xl font-black text-[#6254D9]">
                  {course.total_assignements}
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E8E2FA] bg-white p-6">
                <p className="text-xs text-[#90969A]">
                  تعداد فصل‌ها
                </p>

                <p className="mt-2 text-2xl font-black text-[#6254D9]">
                  {course.sections.length}
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E8E2FA] bg-white p-6">
                <p className="text-xs text-[#90969A]">
                  تعداد درس‌ها
                </p>

                <p className="mt-2 text-2xl font-black text-[#6254D9]">
                  {totalSubsections}
                </p>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-[32px] border border-[#E8E2FA] bg-white p-6 shadow-[0_16px_50px_rgba(98,84,217,0.08)]">
              <span className="text-sm font-bold text-[#7657C8]">
                شروع یادگیری
              </span>

              <div className="mt-4">
                <p className="text-xs text-[#90969A]">
                  قیمت دوره
                </p>

                <p className="mt-1 text-2xl font-black text-[#263B40]">
                  {course.price === 0
                    ? "رایگان"
                    : `${course.price.toLocaleString(
                      "fa-IR"
                    )} تومان`}
                </p>

                {course.discount > 0 && (
                  <span className="mt-2 inline-flex rounded-full bg-[#EAF7ED] px-3 py-1.5 text-xs font-bold text-[#4E9A5D]">
                    {Math.round(course.discount * 100)}٪ تخفیف
                  </span>
                )}
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-2xl bg-[#6254D9] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#5144C5]"
              >
                {course.is_registered
                  ? "ادامه یادگیری"
                  : course.is_pre_registered
                    ? "پیش‌ثبت‌نام"
                    : "شروع یادگیری"}
              </button>

              <div className="mt-6 space-y-4 border-t border-[#F0EDF8] pt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#90969A]">
                    دانشجو
                  </span>
                  <span className="font-bold text-[#394A50]">
                    {course.students_count}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#90969A]">
                    فصل‌ها
                  </span>
                  <span className="font-bold text-[#394A50]">
                    {course.sections.length}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#90969A]">
                    درس‌ها
                  </span>
                  <span className="font-bold text-[#394A50]">
                    {totalSubsections}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#90969A]">
                    مدت دوره
                  </span>
                  <span className="font-bold text-[#394A50]">
                    {course.total_duration || 0} دقیقه
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#90969A]">
                    آزمون
                  </span>
                  <span className="font-bold text-[#394A50]">
                    {course.total_quizes}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#90969A]">
                    تکلیف
                  </span>
                  <span className="font-bold text-[#394A50]">
                    {course.total_assignements}
                  </span>
                </div>
              </div>

              {course.is_registered && (
                <div className="mt-6 border-t border-[#F0EDF8] pt-5">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-[#90969A]">
                      پیشرفت شما
                    </span>

                    <span className="font-bold text-[#6254D9]">
                      {course.reading_percent}٪
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-[#EEE8FF]">
                    <div
                      className="h-full rounded-full bg-[#6254D9]"
                      style={{
                        width: `${Math.min(
                          Math.max(course.reading_percent, 0),
                          100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}