"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/content/site";
import PlaceholderImage from "./PlaceholderImage";
import FadeIn from "./FadeIn";

const ASPECTS = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[4/3]"];

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length));

  const active = activeIndex !== null ? gallery[activeIndex] : null;

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {gallery.map((item, i) => (
          <FadeIn key={item.id} delay={(i % 6) * 80} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className="block w-full text-left"
              aria-label={`View ${item.label}`}
            >
              <PlaceholderImage
                label={item.label}
                variant={i}
                className={`${ASPECTS[i % ASPECTS.length]} w-full transition-transform hover:scale-[1.02]`}
              />
            </button>
          </FadeIn>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 text-milky-white/80 hover:text-milky-white"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 text-milky-white/80 hover:text-milky-white sm:left-6"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className="w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <PlaceholderImage label={active.label} variant={activeIndex ?? 0} className="aspect-square w-full" />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 text-milky-white/80 hover:text-milky-white sm:right-6"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </>
  );
}
