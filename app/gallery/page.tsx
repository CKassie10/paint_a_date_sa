import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos from past Paint A Date sip & paint sessions, tote bag painting days, and private events across Durban & KZN.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-4 pt-14 sm:px-8 sm:pt-20">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-blush">Gallery</p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
              A peek at past paint dates
            </h1>
            <p className="mt-4 text-base text-ink/70">
              Placeholder photos below — click any tile to preview. Swap these for real session photos in{" "}
              <code className="rounded bg-powder-pink/30 px-1.5 py-0.5 text-sm">content/site.ts</code>.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <GalleryGrid />
      </section>

      <CTABanner />
    </>
  );
}
