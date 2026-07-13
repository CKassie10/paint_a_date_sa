"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/content/site";
import FadeIn from "./FadeIn";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <FadeIn>
        <div className="text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-blush">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            No experience? No problem.
          </h2>
        </div>
      </FadeIn>

      <div className="mt-10 space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <FadeIn key={faq.question} delay={i * 60}>
              <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-blush/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-display text-base font-semibold text-ink sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-blush transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-ink/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
