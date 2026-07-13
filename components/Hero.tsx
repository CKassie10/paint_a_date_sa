import Link from "next/link";
import { hero } from "@/content/site";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-vanilla-dust via-milky-white to-milky-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="order-2 lg:order-1">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-blush">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {hero.heading}
          </h1>
          <p className="mt-5 max-w-lg font-body text-base text-ink/70 sm:text-lg">{hero.subtext}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={hero.ctaHref}
              className="rounded-full bg-blush px-7 py-3.5 font-body text-sm font-semibold text-milky-white shadow-lg shadow-blush/30 transition-transform hover:scale-105"
            >
              {hero.ctaLabel}
            </Link>
            <Link
              href={hero.secondaryCtaHref}
              className="rounded-full border-2 border-ink/15 px-7 py-3.5 font-body text-sm font-semibold text-ink transition-colors hover:border-blush hover:text-blush"
            >
              {hero.secondaryCtaLabel}
            </Link>
          </div>

          <p className="mt-6 font-body text-xs font-medium uppercase tracking-wide text-ink/50">
            ✨ {hero.socialProof}
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <PlaceholderImage
            label="Hero image — couple or friends painting together, glasses in hand"
            className="aspect-[4/5] w-full sm:aspect-[5/4]"
            variant={0}
          />
        </div>
      </div>
    </section>
  );
}
