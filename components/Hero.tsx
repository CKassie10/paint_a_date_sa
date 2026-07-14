import Link from "next/link";
import { Heart, Paintbrush, Users, Wine } from "lucide-react";
import { hero, heroFeatures } from "@/content/site";
import ShaderBackground from "@/components/ui/shader-background";

const featureIcons = {
  wine: Wine,
  paintbrush: Paintbrush,
  users: Users,
  heart: Heart,
};

const featureDividers = [
  "border-b border-r border-blush/20 sm:border-b-0 sm:border-r",
  "border-b border-blush/20 sm:border-b-0 sm:border-r sm:border-blush/20",
  "border-r border-blush/20",
  "",
];

export default function Hero() {
  const [line1, line2, line3] = hero.headingLines;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <ShaderBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-blush">
            {hero.eyebrow}
          </p>

          <Heart className="mx-auto mt-4 h-6 w-6 text-blush" strokeWidth={1.5} />

          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            <span className="block">{line1}</span>
            <span className="block text-blush">{line2}</span>
            <span className="block">{line3}</span>
          </h1>

          <svg
            viewBox="0 0 300 80"
            className="pointer-events-none mx-auto -mt-1 h-12 w-56 sm:h-14 sm:w-72"
            aria-hidden="true"
          >
            <path
              d="M6 24C70 46 150 46 208 26"
              fill="none"
              stroke="#F4A6B7"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <path
              d="M214.8 12.4a5.5 5.5 0 0 0-7.78 0l-1.06 1.06-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06 7.78 7.79 7.78-7.79 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              fill="none"
              stroke="#F4A6B7"
              strokeWidth={1.8}
              strokeLinejoin="round"
            />
          </svg>

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

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 rounded-4xl bg-white/60 p-6 text-left shadow-sm ring-1 ring-blush/10 backdrop-blur-sm sm:grid-cols-4 sm:gap-x-6 sm:p-8">
          {heroFeatures.map((feature, i) => {
            const Icon = featureIcons[feature.icon];
            return (
              <div
                key={feature.title}
                className={`flex flex-col gap-3 pr-4 sm:flex-row sm:items-center sm:gap-4 sm:pb-0 sm:pr-6 ${featureDividers[i]} ${
                  i < 2 ? "pb-6" : ""
                }`}
              >
                <Icon className="h-7 w-7 shrink-0 text-blush" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-sm font-semibold text-blush">{feature.title}</p>
                  <p className="mt-1 font-body text-sm text-ink/70">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
