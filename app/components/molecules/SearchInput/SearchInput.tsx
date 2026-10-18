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

  const currentSearch = searchParams.get("search") ?? "";

  const [search, setSearch] = useState(currentSearch);

  useEffect(() => {
    const trimmedSearch = search.trim();

    if (trimmedSearch === currentSearch) {
      return;
    }

    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (trimmedSearch) {
        params.set("search", trimmedSearch);
      } else {
        params.delete("search");
      }

      const query = params.toString();

      router.replace(
        query ? `${pathname}?${query}` : pathname,
        {
          scroll: false,
        }
      );
    }, 400);

    return () => clearTimeout(timer);
  }, [search, currentSearch, pathname, router, searchParams]);

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