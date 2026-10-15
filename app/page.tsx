import HeroSection from "./components/organisms/HeroSection/HeroSection";
import ArticleList from "./components/organisms/ArticleList/ArticleList";
import PostList from "./components/organisms/PostList/PostList";
import CourseList from "./components/organisms/CourseList/CourseList";

import { getArticles } from "./features/articles/api/articles.api";
import { getCourses } from "./features/courses/api/courses.api";

export default async function Home() {
  const [articlesResponse, coursesResponse] = await Promise.all([
    getArticles(),
    getCourses(),
  ]);

  return (
    <main className="overflow-hidden bg-white">
      <HeroSection />

      <ArticleList articles={articlesResponse.data} />

      <PostList limit={3} />

      <CourseList
        courses={coursesResponse.data}
        limit={3}
      />
    </main>
  );
}