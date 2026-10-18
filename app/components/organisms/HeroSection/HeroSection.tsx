import Image from "next/image";

export default function HeroSection() {
  return (
    <section dir="ltr" className="relative bg-[#f4f4f5]">

      <div className="absolute -right-20 top-10 h-52 w-52 rounded-full bg-[#DCD7FF] opacity-50 blur-2xl" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#DDEBFF] opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] px-5">

        <div className="grid min-h-[520px] grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-20">

          <div dir="rtl" className="order-2 text-center md:order-1 md:text-right">

            <span className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#6254D9] shadow-sm">
              مسیر یادگیری خودت را بساز
            </span>

            <h1 className="max-w-[600px] text-[35px] font-extrabold leading-[1.45] tracking-tight text-[#172F55] md:text-[48px]">
              یادگیری را
              <span className="text-[#6254D9]"> ساده‌تر </span>
              و
              <br className="hidden md:block" />
              جذاب‌تر تجربه کن
            </h1>

            <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-8 text-[#73788F] md:mx-0">
              با مقالات آموزشی، پست‌های کاربردی و دوره‌های تخصصی
              مهارت‌های خودت را توسعه بده و قدم‌به‌قدم پیشرفت کن.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">

              <a
                href="/courses"
                className="flex h-12 min-w-[150px] items-center justify-center rounded-[14px] bg-[#6254D9] px-6 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(98,84,217,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#5547CB]"
              >
                مشاهده دوره‌ها
              </a>

              <a
                href="/articles"
                className="flex h-12 min-w-[150px] items-center justify-center rounded-[14px] border border-[#DDD9F8] bg-white px-6 text-[14px] font-bold text-[#6254D9] transition duration-300 hover:-translate-y-1"
              >
                مطالعه مقالات
              </a>

            </div>

          </div>

          <Image
            src="/images/herosection/sepehrjo-hero-visual.png"
            alt="hero"
            width={700}
            height={500}
          />

        </div>

      </div>
    </section>
  );
}