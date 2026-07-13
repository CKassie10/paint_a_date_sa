import { about } from "@/content/site";
import PlaceholderImage from "./PlaceholderImage";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="bg-powder-pink/20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <PlaceholderImage label={about.photoCaption} className="aspect-square w-full max-w-md" variant={2} />
        </FadeIn>
        <FadeIn delay={100}>
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-blush">
            The Face Behind The Brushes
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{about.heading}</h2>
          <p className="mt-5 whitespace-pre-line font-body text-base leading-relaxed text-ink/70">
            {about.body}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
