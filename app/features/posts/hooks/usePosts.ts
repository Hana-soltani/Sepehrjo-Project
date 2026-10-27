"use client";

import { getPost } from "../api/posts.api";
import { useInfiniteQuery } from "@tanstack/react-query";

const POST_LIMIT = 6;

export function usePosts(search?: string) {
  return useInfiniteQuery({
    queryKey: ["posts", search],
    queryFn: ({pageParam}) => getPost( POST_LIMIT,pageParam,search),
    initialPageParam :0,
    
    getNextPageParam: (lastPage, allPages) => {
     if (lastPage.data.length < POST_LIMIT) {
      return undefined;
     }
     return allPages.length* POST_LIMIT;
    }
  });
}