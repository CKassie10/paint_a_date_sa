import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";
import { business, contact, nav } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="border-t border-blush/20 bg-vanilla-dust">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Image
              src="/images/logo.png"
              alt={`${business.displayName} logo`}
              width={160}
              height={160}
              className="h-20 w-20 object-contain"
            />
            <p className="mt-2 text-sm text-blush">{business.handle}</p>
            <p className="mt-3 max-w-xs text-sm text-ink/70">{business.tagline}</p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink/60">
              Explore
            </p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink/70 transition-colors hover:text-blush">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink/60">
              Get In Touch
            </p>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-blush"
                >
                  <Instagram className="h-4 w-4" /> {contact.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-blush"
                >
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl("Hi! I'd love to know more about paint_a_date_sa sessions ✨")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-blush"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-blush"
                >
                  <Mail className="h-4 w-4" /> {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-blush/20 pt-6 text-center text-xs text-ink/50">
          © {new Date().getFullYear()} {business.displayName}. Made with brushes, bubbles & a bit of lekker.
        </div>
      </div>
    </footer>
  );
}
