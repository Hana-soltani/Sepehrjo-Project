"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node
            if (menuRef.current && !menuRef.current.contains(target) && buttonRef.current && !buttonRef.current.contains(target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => { document.removeEventListener("mousedown", handleClickOutside) };
    }, []);

    return (
        <header className="bg-white relative ">
            <div className="relative mx-auto flex h-[82px] max-w-[1200px] items-center justify-between px-5">


                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/images/icons/sepehrjo-icon.svg"
                        alt="سپهرجو"
                        width={42}
                        height={42}
                        priority
                    />

                    <span className="text-[25px] font-extrabold tracking-[-0.5px] text-[#172F55]">
                        سپهرجو
                    </span>
                </Link>


                <nav dir="ltr" className="absolute left-1/2 hidden h-full -translate-x-1/2 items-center justify-center gap-[34px] md:flex">

                    <Link href="/courses" className="relative flex h-full items-center text-[15px] font-semibold text-[#172F55] transition-colors hover:text-[#6254D9]">
                        دوره‌ها
                    </Link>

                    <Link href="/post" className="relative flex h-full items-center text-[15px] font-semibold text-[#172F55] transition-colors hover:text-[#6254D9]">
                        پست‌ها
                    </Link>

                    <Link href="/articles" className="relative flex h-full items-center text-[15px] font-semibold text-[#172F55] transition-colors hover:text-[#6254D9]">
                        مقالات
                    </Link>


                    <Link href="/" className="relative flex h-full items-center text-[15px] font-semibold text-[#6254D9]">
                        خانه
                        <span className="absolute bottom-[17px] left-1/2 h-[2px] w-[40px] -translate-x-1/2 rounded-full bg-[#6254D9]" />
                    </Link>

                </nav>


                <button type="button" aria-label="باز کردن منو"
                    ref={buttonRef}
                    onClick={() => setIsMenuOpen((previous) => !previous)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1F2FC] text-[#6254D9] md:hidden"
                >
                    <Image
                        src="/images/icons/menu-icon.svg"
                        alt="منو"
                        width={21}
                        height={21}
                    />

                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div ref={menuRef} className=" absolute left-0 right-0 z-50 border-t border-[#F0F1F6] bg-white px-5 py-5 md:hidden">

                    <nav className="flex flex-col gap-5 mr-6 ">

                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-[#6254D9]">
                            خانه
                        </Link>

                        <Link href="/articles" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-[#172F55]" >
                            مقالات
                        </Link>

                        <Link href="/post" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-[#172F55]">
                            پست‌ها
                        </Link>

                        <Link href="/courses" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-[#172F55]">
                            دوره‌ها
                        </Link>

                    </nav>
                </div>
            )}
        </header>
    );
}