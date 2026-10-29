import type { Post } from "../types/posts.types";

export function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKC")
    .replace(/ي/g, "ی")
    .replace(/ا/g, "آ")
    .replace(/\u200C/g, " ")
    .replace(/\s+/g, " ");
}

export function searchPosts(
  posts: Post[],
  search: string
): Post[] {
  const normalizedSearch = normalizeText(search);

  if (!normalizedSearch) {
    return posts;
  }

  return posts.filter((post) => {
    const searchableText = [
      post.description,
      post.user_full_name,
      post.user_headline ?? "",
      ...post.skills,
    ]
      .map(normalizeText)
      .join(" ");

    return searchableText.includes(normalizedSearch);
  });
}