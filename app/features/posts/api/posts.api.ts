import axios from "axios";
import api from "@/app/lib/axios";
import type {
  PostListResponse,
  PostDetailResponse,
} from "../types/posts.types";

export async function getPost(search?: string): Promise<PostListResponse> {
  const response = await api.get<PostListResponse>("post/", {
    params: search ? { search } : undefined,
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
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }

    throw error;
  }
}