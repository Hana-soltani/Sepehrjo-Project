import { ApiError } from "@/app/lib/error-handler";
import api from "@/app/lib/api-helper";
import type { PostListResponse, PostDetailResponse, } from "../types/posts.types";

export async function getPost(limit:number, offset:number): Promise<PostListResponse> {
  const response = await api.get<PostListResponse>("post/", {
    params:{limit, offset,} 
  });

  return response.data;
}

export async function getPostById(
  id: number
): Promise<PostDetailResponse | null> {
  try {
    const response = await api.get<PostDetailResponse>(`post/${id}/`);

    return response.data;
  } catch (error) {
    if (error instanceof ApiError && error.status ===404) {
      return null;
    }

    throw error;
  }

}