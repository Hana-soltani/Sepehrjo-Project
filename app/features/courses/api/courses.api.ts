import axios from "axios";
import api from "@/app/lib/api-helper";
import type {
  CourseListResponse,
  CourseDetailResponse,
} from "../types/courses.types";

export async function getCourses(
  search?: string
): Promise<CourseListResponse> {
  const response = await api.get<CourseListResponse>("course/", {
    params: search ? { search } : undefined,
  });

  return response.data;
}

export async function getCourseById(
  id: number
): Promise<CourseDetailResponse | null> {
  try {
    const response = await api.get<CourseDetailResponse>(`course/${id}/`);
    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }

    throw error;
  }

}