import { testimonials } from "@/content/site";
import StarRating from "./StarRating";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <section className="bg-vanilla-dust/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-blush">
              Reviews
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Don&apos;t just take our word for it
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <div className="flex h-full flex-col rounded-4xl bg-white p-6 shadow-sm ring-1 ring-blush/10">
                <StarRating rating={t.rating} />
                <p className="mt-4 flex-1 text-sm italic leading-relaxed text-ink/80">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4">
                  <p className="font-display text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.context}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
