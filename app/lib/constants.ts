export const BASE_URL = "https://stg-api.sepehrjou.ir/api/v1/"

function build_url(path:string){
    if (path.startsWith("/")){
        throw Error("should not start with slash")
    }
    return BASE_URL + path
}