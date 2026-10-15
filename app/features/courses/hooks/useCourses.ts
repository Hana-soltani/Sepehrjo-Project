"use client";

import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../api/courses.api";

export function useCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () => getCourses(),
  });
}