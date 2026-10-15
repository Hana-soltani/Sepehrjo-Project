import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../api/articles.api";

export function useArticles(search: string = "") {
  return useQuery({
    queryKey: ["articles", search],
    queryFn: () => getArticles(search),
  });
}