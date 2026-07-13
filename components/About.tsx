import Image from "next/image";
import { Heart } from "lucide-react";
import { about } from "@/content/site";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="bg-powder-pink/20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-4xl shadow-lg shadow-blush/20">
            <Image
              src={about.photoSrc}
              alt={about.photoAlt}
              fill
              sizes="(min-width: 1024px) 448px, 90vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-blush">
            {about.eyebrow}
            <Heart className="h-4 w-4 fill-blush text-blush" />
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{about.heading}</h2>
          <p className="mt-5 whitespace-pre-line font-body text-base leading-relaxed text-ink/70">
            {about.body}
          </p>
          <p className="mt-5 flex items-center gap-2 font-display text-lg italic text-blush">
            {about.closing}
            <Heart className="h-4 w-4 fill-blush text-blush" />
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
