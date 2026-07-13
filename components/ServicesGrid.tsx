import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/site";
import FadeIn from "./FadeIn";

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-blush">
            What We Offer
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Pick your kind of paint date
          </h2>
        </div>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <FadeIn key={service.slug} delay={i * 100}>
            <Link
              href="/sessions"
              className="group flex h-full flex-col overflow-hidden rounded-4xl bg-white/60 p-4 shadow-sm ring-1 ring-blush/10 transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image
                  src={service.imageSrc}
                  alt={service.image}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-xl font-semibold text-ink">
                  <span className="mr-2">{service.emoji}</span>
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink/70">{service.blurb}</p>
                <span className="mt-4 font-body text-sm font-semibold text-blush group-hover:underline">
                  See details →
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
