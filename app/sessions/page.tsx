import type { Metadata } from "next";
import { sessions } from "@/content/site";
import SessionCard from "@/components/SessionCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Sessions & Pricing",
  description:
    "Canvas painting, tote bag painting, and private paint events in Durban & KZN — see pricing and what's included in every guided sip & paint session.",
};

export default function SessionsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-4 pt-14 sm:px-8 sm:pt-20">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-blush">
              Sessions & Pricing
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Find your perfect paint date
            </h1>
            <p className="mt-4 text-base text-ink/70">
              Prices below are placeholders — swap in your real rates in{" "}
              <code className="rounded bg-powder-pink/30 px-1.5 py-0.5 text-sm">content/site.ts</code>.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {sessions.map((session, i) => (
            <SessionCard key={session.slug} session={session} index={i} />
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
