export interface ArticleUser {
    id: number;
    username: string;
    full_name: string;
    headline: string;
    is_followed: boolean;
    avatar: string;
    banner: string
}

export interface Article {
    id: number;
    likes_count: number;
    comments_count: number;
    is_liked: boolean;
    is_saved: boolean;
    user: ArticleUser;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    uuid: string;
    image: string | null;
    title: string;
    slug: string;
    meta_description: string | null;
    publish_status: number;
    is_published: boolean;
}

export interface ArticleListResponse {
    success: boolean;
    message: string;
    data: Article[]
}


export interface ArticleDetailUser extends ArticleUser {
    followers_count: number;
    followings_count: number
}

export interface ArticleDetail extends Article {
    content: string;
    user: ArticleDetailUser
    skills: string[];
    tags: string[];
    categories: string[];

}

export interface ArticleDetailResponse {
    success: boolean;
    message: string;
    data: ArticleDetail
}

