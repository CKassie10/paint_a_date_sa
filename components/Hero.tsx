import Link from "next/link";
import { hero } from "@/content/site";
import ShaderBackground from "@/components/ui/shader-background";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <ShaderBackground />

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-blush">
          {hero.eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
          {hero.heading}
        </h1>
        <p className="mx-auto mt-5 max-w-lg font-body text-base text-ink/70 sm:text-lg">{hero.subtext}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
