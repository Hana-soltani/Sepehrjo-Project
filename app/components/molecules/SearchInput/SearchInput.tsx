"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({
  placeholder = "جستجو...",
}: SearchInputProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") ?? ""
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (search.trim()) {
        params.set("search", search.trim());
      } else {
        params.delete("search");
      }

      const query = params.toString();

      router.replace(
        query ? `${pathname}?${query}` : pathname
      );
    }, 400);

    return () => clearTimeout(timer);
  }, [search, pathname, router, searchParams]);

  return (
    <div
      dir="rtl"
      className="flex h-11 w-full items-center justify-center rounded-[13px] bg-[#e3e5f3] px-3"
    >
      <Image
        src="/images/icons/search-icon.svg"
        alt=""
        width={17}
        height={17}
        className="shrink-0"
      />

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={placeholder}
        className="mr-2 w-full bg-transparent text-sm text-[#172F55] outline-none placeholder:text-[#73788F]"
      />
    </div>
  );
}