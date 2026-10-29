"use client";

import { useEffect, useRef } from "react";
import type { usePosts } from "./usePosts";

type PostsQuery = ReturnType<typeof usePosts>;

interface UsePostInfiniteScrollProps {
  query: PostsQuery;
  enabled: boolean;
}

export function usePostInfiniteScroll({
  query,
  enabled,
}: UsePostInfiniteScrollProps) {
  const {fetchNextPage, hasNextPage,isFetchingNextPage,} = query;
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const canFetchNextPageRef = useRef(true);

  useEffect(() => {
    if (!enabled || !hasNextPage) {
      return;
    }

    const target = loadMoreRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (!entry.isIntersecting) {
          canFetchNextPageRef.current = true;
          return;
        }

        if (
          !canFetchNextPageRef.current ||
          isFetchingNextPage
        ) {
          return;
        }

        canFetchNextPageRef.current = false;

        fetchNextPage();
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [
    enabled,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  ]);

  return {
    loadMoreRef,
  };
}