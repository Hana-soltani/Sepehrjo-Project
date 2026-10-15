"use client";

import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/posts.api";

export function usePosts(search?: string) {
  return useQuery({
    queryKey: ["posts", search],
    queryFn: () => getPost(search),
  });
}