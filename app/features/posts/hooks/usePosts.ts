"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getPost } from "../api/posts.api";

const POST_LIMIT = 6;

export function usePosts() {
  return useInfiniteQuery({
    queryKey: ["posts"],

    queryFn: ({ pageParam }) =>
      getPost(POST_LIMIT, pageParam),

    initialPageParam: 0,

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.length < POST_LIMIT) {
        return undefined;
      }

      return allPages.length * POST_LIMIT;
    },
  });
}