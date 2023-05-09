import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function Author({ author }) {
  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">{author.name}</p>
      </div>
    </Container>
  );
}