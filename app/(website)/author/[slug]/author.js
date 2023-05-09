import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@/lib/sanity/plugins/portabletext";

export default function Author({ author }) {
  const imageProps = author?.image
  ? urlForImage(author?.image)
  : null;
  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        About
      </h1>
      <div className="flex flex-col items-center justify-center">
        <Image
          className="rounded-full h-40 w-40 object-cover"
          src={imageProps.src}
          alt={`Photo of ${author.name}`}
        />
        <h2 className="mt-4 mb-2 text-xl font-medium text-gray-900 dark:text-white">{author.name}</h2>
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {author.bio && <PortableText value={author.bio} />}
          </div>
        </div>
    </Container>
  );
}