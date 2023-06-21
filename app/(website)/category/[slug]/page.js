import {getPostsByCategory} from "@/lib/sanity/client";
import Category from "./category";

export default async function AuthorPage({ params }) {
  const posts = await getPostsByCategory(params.slug);
  return <Category posts={posts} slug={params.slug} />;
}

export const revalidate = 60;