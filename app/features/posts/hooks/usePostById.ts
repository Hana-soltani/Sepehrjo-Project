import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../api/posts.api";

export function usePostById(id:number){
    return useQuery({
        queryKey:["post",id],
        queryFn:() => getPostById(id)
    })
}