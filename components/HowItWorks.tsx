import { steps } from "@/content/site";
import FadeIn from "./FadeIn";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-blush">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Three steps to your next favourite night out
          </h2>
        </div>
      </FadeIn>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {steps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 120}>
            <div className="text-center">
              <span className="font-display text-5xl font-semibold text-powder-pink">{step.number}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
