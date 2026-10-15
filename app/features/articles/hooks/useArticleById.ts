import { useQuery } from "@tanstack/react-query";
import { getArticleById } from "../api/articles.api";

export function UseArticlesById(id:number){
    return useQuery({
        queryKey:["articles",id],
        queryFn: () => getArticleById(id)
    })
}