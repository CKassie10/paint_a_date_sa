"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { nav, business, contact } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blush/20 bg-milky-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={`${business.displayName} logo`}
            width={112}
            height={112}
            priority
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
          <span className="hidden font-body text-sm font-medium text-blush sm:inline">
            {business.handle}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body text-sm font-medium transition-colors hover:text-blush ${
                pathname === item.href ? "text-blush" : "text-ink/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="text-ink/70 transition-colors hover:text-blush"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="text-ink/70"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="text-ink"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-blush/20 bg-milky-white px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-3 font-body text-base font-medium transition-colors ${
                    pathname === item.href ? "bg-powder-pink/40 text-ink" : "text-ink/80 hover:bg-powder-pink/20"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
