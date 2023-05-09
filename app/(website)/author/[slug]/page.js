import { getOneAuthor } from "@/lib/sanity/client";
import Author from "./author";

export default async function AuthorPage({ params }) {
  const author = await getOneAuthor(params.slug);
  return <Author author={author} />;
}

export const revalidate = 60;