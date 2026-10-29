"use client";

import { useEffect } from "react";
import type { usePosts } from "./usePosts";

import { normalizeText, searchPosts, } from "../utils/post-search";

type PostsQuery = ReturnType<typeof usePosts>;

interface UsePostSearchProps {
    query: PostsQuery;
    search: string;
    limit?: number;
}

export function usePostSearch({ query, search, limit, }: UsePostSearchProps) {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, } = query;
    const posts = data?.pages.flatMap((page) => page.data) ?? [];
    const normalizedSearch = normalizeText(search);
    const isSearching = Boolean(normalizedSearch);
    const filteredPosts = searchPosts(posts, search);

    useEffect(() => {
        if (!isSearching || !hasNextPage || isFetchingNextPage) {
            return;
        }

        fetchNextPage();
    }, [
        isSearching,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    ]);

    const visiblePosts =
        limit !== undefined
            ? filteredPosts.slice(0, limit)
            : filteredPosts;

    return {
        posts,
        visiblePosts,
        isSearching,
        isFetchingNextPage,
    };
}