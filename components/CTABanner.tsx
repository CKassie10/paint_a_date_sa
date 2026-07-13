import Link from "next/link";
import { hero } from "@/content/site";
import FadeIn from "./FadeIn";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-br from-blush via-powder-pink to-rose-milk">
      <FadeIn>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="font-display text-3xl font-semibold text-milky-white sm:text-4xl">
            Ready for your next paint date?
          </h2>
          <p className="mt-4 font-body text-base text-milky-white/90 sm:text-lg">
            Grab your person, your bestie, or your whole crew — a canvas and a good time is waiting.
          </p>
          <Link
            href={hero.ctaHref}
            className="mt-8 inline-block rounded-full bg-milky-white px-8 py-4 font-body text-sm font-semibold text-ink shadow-lg transition-transform hover:scale-105"
          >
            {hero.ctaLabel}
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
