import { useQuery } from "@tanstack/react-query";
import { getCourseById } from "../api/courses.api";

export function useCourseById(id:number){
    return useQuery({
        queryKey:["course",id],
        queryFn:() => getCourseById(id)
    })
}