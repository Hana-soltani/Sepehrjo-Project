export interface CourseUser {
    id: number;
    username: string;
    full_name: string;
    headline: string;
    is_followed: boolean;
    avatar: string;
    banner: string | null
}

export interface Course {
    id: number
    user: CourseUser;
    title: string;
    slug: string;
    meta_description: string;
    publish_status: number;
    publishing_soon_status: number;
    image: string | null;
    price: number;
    updated_at: string;
    created_at: string;
    likes_count: number;
    comments_count: number;
    is_liked: boolean;
    is_saved: boolean;
    students_count: number;
    discount: number;
    reading_percent: number;
    is_registered: boolean;
    is_pre_registered: boolean;
    total_duration: number;
    deleted_at: string | null
}

export interface CourseListResponse {
    success: boolean;
    message: string;
    data: Course[]
}

export interface CourseDetailUser extends CourseUser {
    followers_count: number;
    followings_count: number
}

export interface CourseSubsections {
    id: number;
    uuid: string;
    slug: string;
    title: string;
    section: number;
    content_type: string;
    type: number;
    registration_required: boolean;
    reading_mark: boolean;
    duration: number
}

export interface CourseSection {
    id: number;
    course: number;
    title: string;
    subsections: CourseSubsections[];
    subsections_count: Record<string, number>;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}


export interface CourseCategory {
    id: number;
    title: string;
    slug: string;
    depth: number;
    breadcrump: string
}

export interface CourseDetail extends Course {
    user: CourseDetailUser;
    sections: CourseSection[];
    categories: CourseCategory[];
    total_quizes: number;
    total_assignements: number;
    discount_expiration_time: string;
    skills:string[];
    uuid:string;
    introduction_video:string;
    description:string;
    prerequesties:string;
    free_to_pay:boolean;
    tags:number[]
}

export interface CourseDetailResponse {
    success: boolean;
    message: string;
    data:CourseDetail
}

