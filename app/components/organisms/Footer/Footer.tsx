import Image from "next/image";
import Link from "next/link";
import {Send} from 'lucide-react';
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";

export default function Footer() {
    return (
        <footer className="mt-20 bg-[#F7F7FC]">
            <div className="mx-auto max-w-[1200px] px-5">

                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10 md:grid-cols-4 md:gap-8 md:py-14">

                    <div className="col-span-2 flex flex-col items-start md:col-span-1">

                        <Link href="/" className="mb-5 flex items-center gap-2">
                            <Image
                                src="/images/icons/sepehrjo-icon.svg"
                                alt="سپهرجو"
                                width={42}
                                height={42}
                            />

                            <span className="text-[25px] font-extrabold text-[#172F55]">
                                سپهرجو
                            </span>
                        </Link>

                        <p className="max-w-[260px] text-right text-[16px] font-normal leading-7 text-[#73788F]">
                            سپهرجو بستری برای یادگیری، آموزش و رشد مهارت‌های شماست.
                        </p>

                        <div className="mt-6 flex items-center gap-3">

                            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white transition hover:-translate-y-1">
                              <SlSocialInstagram className="text-[#6254D9]" />
                            </a>

                            <a href="#" aria-label="Telegram" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white transition hover:-translate-y-1" >
                               <Send className="text-[#6254D9] w-4" />
                            </a>

                            <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white transition hover:-translate-y-1">
                              <SlSocialLinkedin className="text-[#6254D9]" />
                            </a>

                            <a href="#" aria-label="X" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white transition hover:-translate-y-1">
                               <SlSocialYoutube className="text-[#6254D9] " />
                            </a>

                        </div>
                    </div>



                    <div>
                        <h3 className="mb-6 xl:pt-3 text-[18px] font-semibold text-[#172F55]">
                            دسترسی سریع
                        </h3>

                        <nav className="flex flex-col gap-2">

                            <Link href="/" className="text-[15px] text-[#73788F] transition hover:text-[#6254D9]" >
                                خانه
                            </Link>

                            <Link href="/articles" className="text-[15px] text-[#73788F] transition hover:text-[#6254D9]">
                                مقالات
                            </Link>

                            <Link href="/post" className="text-[15px] text-[#73788F] transition hover:text-[#6254D9]" >
                                پست‌ها
                            </Link>

                            <Link href="/courses" className="text-[15px] text-[#73788F] transition hover:text-[#6254D9]">
                                دوره‌ها
                            </Link>

                        </nav>
                    </div>



                    <div>
                        <h3 className="mb-6 xl:pt-3 text-[18px] font-semibold text-[#172F55]">
                            بخش‌های سپهرجو
                        </h3>

                        <nav className="flex flex-col gap-4">

                            <Link href="/courses" className="text-[15px] text-[#73788F] transition hover:text-[#6254D9]" >
                                دوره‌های آموزشی
                            </Link>

                            <Link href="/articles" className="text-[15px] text-[#73788F] transition hover:text-[#6254D9]" >
                                مقالات آموزشی
                            </Link>

                            <Link href="/post" className="text-[15px] text-[#73788F] transition hover:text-[#6254D9]" >
                                پست‌های کاربران
                            </Link>

                        </nav>
                    </div>



                    <div className="col-span-2 md:col-span-1">

                        <h3 className="mb-6 xl:pt-3 text-[18px] font-semibold text-[#172F55]">
                            ارتباط با ما
                        </h3>

                        <div className="flex flex-col gap-4 text-[15px] text-[#73788F]">

                            <p>
                                سوالی دارید؟ با ما در ارتباط باشید.
                            </p>

                            <p>
                                پشتیبانی سپهرجو
                            </p>

                            <a href="mailto:info@sepehrjou.ir" className="transition hover:text-[#6254D9]" >
                                info@sepehrjou.ir
                            </a>

                        </div>
                    </div>

                </div>



                <div className="border-t border-[#E7E8F0] py-5">

                    <div className="flex flex-col items-center justify-between gap-3 md:flex-row">

                        <p className="text-[11px] text-[#9297AD]">
                            © تمامی حقوق برای سپهرجو محفوظ است.
                        </p>

                    </div>

                </div>

            </div>
        </footer>
    );
}