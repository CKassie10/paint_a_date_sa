import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Enquire about a canvas painting, tote bag painting, or private paint event with Paint A Date in Durban & KZN — via WhatsApp, email, or Instagram DM.",
};

export default function BookPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-blush">Book Now</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Let&apos;s pick your paint date
          </h1>
          <p className="mt-4 text-base text-ink/70">
            Fill in a few details and we&apos;ll get your session sorted over WhatsApp, email, or Instagram —
            whatever suits you best.
          </p>
        </div>
      </FadeIn>

      <div className="mt-12">
        <FadeIn>
          <BookingForm />
        </FadeIn>
      </div>
    </section>
  );
}
