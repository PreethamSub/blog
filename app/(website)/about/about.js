import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import Portfolio from "@/components/portfolio";

export default function About({ authors, settings }) {
  return (
    <Container>
      <Portfolio/>
      <div className="text-center">
      <div className="grid grid-cols-1 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image);
          return (
            <div
              key={author._id}
              className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author.slug}`}>
                <Image
                  src={imageProps.src || " "}
                  alt={author.name || " "}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </Link>
            </div>
          );
        })}
      </div>
      </div>

      <div className="mx-auto prose text-center dark:prose-invert mt-14">
        <p>
        A little less formally,<br/>I am an enthusiastic and hardworking individual with a passion for Artificial Intelligence 
        and Machine Learning. I am currently pursuing my undergraduate studies in AIML and have 
        gained practical knowledge in various AI domains like Natural Language Processing and 
        Computer Vision. I enjoy solving complex problems and constantly strive 
        to improve my skills through self-learning and exploration of new technologies. 
        Along with technical skills, I possess strong analytical skills as well as interpersonal 
        communication skills that have helped me in various academic and co-curricular activities. 
        </p>
        <p>
        Apart from academics, I enjoy reading books and spending time with my friends and family. 
        I am always eager to learn and apply my knowledge to real-world problems and am motivated to 
        make a positive impact in the field of AI.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
