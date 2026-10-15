export interface PostsMedia {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    media_type: string;
    media_file: string;
    post: number
}

export interface Post {
    id: number;
    user: string;
    user_headline: string | null;
    user_full_name: string;
    user_avatar: string | null;
    likes_count: number;
    comments_count: number;
    is_user_followed: boolean;
    is_liked: boolean;
    is_saved: boolean;
    media: PostsMedia[];
    skills: string[];
    status: string;
    is_published: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    uuid: string;
    description: string
}

export interface PostListResponse {
    success: boolean;
    message: string;
    data: Post[]
}


export interface PostDetailResponse {
    success: boolean;
    message: string;
    data: Post
}