import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import type { sessions } from "@/content/site";
import FadeIn from "./FadeIn";
import { hero } from "@/content/site";

type Session = (typeof sessions)[number];

export default function SessionCard({ session, index }: { session: Session; index: number }) {
  return (
    <FadeIn delay={index * 100}>
      <div
        className={`flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-sm ring-1 ring-blush/10 ${
          session.highlighted ? "ring-2 ring-blush" : ""
        }`}
      >
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={session.imageSrc}
            alt={`${session.title} — session photo`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          {session.highlighted && (
            <span className="mb-3 inline-block w-fit rounded-full bg-blush px-3 py-1 font-body text-xs font-semibold text-milky-white">
              Most Booked
            </span>
          )}
          <p className="font-body text-xs font-semibold uppercase tracking-wide text-blush">
            {session.tagline}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
            <span className="mr-2">{session.emoji}</span>
            {session.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">{session.description}</p>

          <div className="mt-5 flex items-baseline gap-1">
            <span className="font-display text-3xl font-semibold text-ink">{session.price}</span>
            <span className="text-sm text-ink/50">{session.unit}</span>
          </div>

          <ul className="mt-5 space-y-2">
            {session.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink/70">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blush" />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href={hero.ctaHref}
            className="mt-6 rounded-full bg-blush px-6 py-3 text-center font-body text-sm font-semibold text-milky-white transition-transform hover:scale-105"
          >
            Book This Session
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
