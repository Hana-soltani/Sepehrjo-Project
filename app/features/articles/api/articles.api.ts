import { ApiError } from "@/app/lib/error-handler";
import api from "@/app/lib/api-helper";
import type { ArticleListResponse, ArticleDetailResponse, } from "../types/articles.types";

export async function getArticles(
  search?: string
): Promise<ArticleListResponse> {
  const response = await api.get<ArticleListResponse>("article/", {
    params: search ? { search } : undefined,
  });

  return response.data;
}

export async function getArticleById(
  id: number
): Promise<ArticleDetailResponse | null> {
  try {
    const response = await api.get<ArticleDetailResponse>(`article/${id}/`);
    return response.data;

  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return null;
    }
    throw error;
  }

}