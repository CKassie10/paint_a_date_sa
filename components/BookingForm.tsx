"use client";

import { useState } from "react";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { sessionTypeOptions, contact } from "@/content/site";
import { buildMailtoUrl, buildWhatsAppUrl } from "@/lib/links";

const initialForm = {
  name: "",
  contactInfo: "",
  sessionType: sessionTypeOptions[0],
  date: "",
  groupSize: "",
  message: "",
};

function composeMessage(form: typeof initialForm) {
  const lines = [
    "Hi Paint A Date! I'd love to book a session ✨",
    "",
    `Name: ${form.name || "-"}`,
    `Email/Phone: ${form.contactInfo || "-"}`,
    `Session type: ${form.sessionType}`,
    `Preferred date: ${form.date || "-"}`,
    `Group size: ${form.groupSize || "-"}`,
  ];
  if (form.message) {
    lines.push(`Message: ${form.message}`);
  }
  return lines.join("\n");
}

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const message = composeMessage(form);
  const whatsappUrl = buildWhatsAppUrl(message);
  const mailtoUrl = buildMailtoUrl("New booking enquiry — Paint A Date", message);

  const handleChange = (field: keyof typeof initialForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
      <form onSubmit={handleSubmit} className="space-y-5 rounded-4xl bg-white p-6 shadow-sm ring-1 ring-blush/10 sm:p-8">
        <div>
          <label htmlFor="name" className="block font-body text-sm font-semibold text-ink">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={handleChange("name")}
            className="mt-1.5 w-full rounded-2xl border border-blush/20 bg-vanilla-dust/40 px-4 py-3 text-sm text-ink outline-none focus:border-blush"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="contactInfo" className="block font-body text-sm font-semibold text-ink">
            Email or phone number
          </label>
          <input
            id="contactInfo"
            required
            value={form.contactInfo}
            onChange={handleChange("contactInfo")}
            className="mt-1.5 w-full rounded-2xl border border-blush/20 bg-vanilla-dust/40 px-4 py-3 text-sm text-ink outline-none focus:border-blush"
            placeholder="you@email.com or 082 123 4567"
          />
        </div>

        <div>
          <label htmlFor="sessionType" className="block font-body text-sm font-semibold text-ink">
            Session type
          </label>
          <select
            id="sessionType"
            value={form.sessionType}
            onChange={handleChange("sessionType")}
            className="mt-1.5 w-full rounded-2xl border border-blush/20 bg-vanilla-dust/40 px-4 py-3 text-sm text-ink outline-none focus:border-blush"
          >
            {sessionTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className="block font-body text-sm font-semibold text-ink">
              Preferred date
            </label>
            <input
              id="date"
              type="date"
              value={form.date}
              onChange={handleChange("date")}
              className="mt-1.5 w-full rounded-2xl border border-blush/20 bg-vanilla-dust/40 px-4 py-3 text-sm text-ink outline-none focus:border-blush"
            />
          </div>
          <div>
            <label htmlFor="groupSize" className="block font-body text-sm font-semibold text-ink">
              Group size
            </label>
            <input
              id="groupSize"
              value={form.groupSize}
              onChange={handleChange("groupSize")}
              className="mt-1.5 w-full rounded-2xl border border-blush/20 bg-vanilla-dust/40 px-4 py-3 text-sm text-ink outline-none focus:border-blush"
              placeholder="e.g. 2, 6, 15"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block font-body text-sm font-semibold text-ink">
            Anything else we should know?
          </label>
          <textarea
            id="message"
            rows={3}
            value={form.message}
            onChange={handleChange("message")}
            className="mt-1.5 w-full rounded-2xl border border-blush/20 bg-vanilla-dust/40 px-4 py-3 text-sm text-ink outline-none focus:border-blush"
            placeholder="Occasion, venue preference, dietary notes, anything at all"
          />
        </div>

        <div className="space-y-3 pt-2">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-blush px-6 py-3.5 font-body text-sm font-semibold text-milky-white transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" /> Send Enquiry via WhatsApp
          </button>
          <a
            href={mailtoUrl}
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink/15 px-6 py-3.5 font-body text-sm font-semibold text-ink transition-colors hover:border-blush hover:text-blush"
          >
            <Mail className="h-4 w-4" /> Send via Email Instead
          </a>
        </div>

        {submitted && (
          <p className="text-center text-xs text-ink/50">
            Opening WhatsApp with your enquiry pre-filled — just hit send there!
          </p>
        )}
      </form>

      <div className="flex flex-col justify-between gap-6">
        <div className="rounded-4xl bg-powder-pink/25 p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-ink">Prefer to DM us?</h3>
          <p className="mt-2 text-sm text-ink/70">
            Slide into our Instagram DMs — we usually reply within a day (sometimes faster, if we&apos;re between
            sessions).
          </p>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-body text-sm font-semibold text-milky-white transition-transform hover:scale-[1.02]"
          >
            <Instagram className="h-4 w-4" /> DM Us on Instagram
          </a>
        </div>

        <div className="rounded-4xl bg-vanilla-dust p-6 text-sm text-ink/60 sm:p-8">
          <p className="font-display text-base font-semibold text-ink">How booking works</p>
          <p className="mt-2 leading-relaxed">
            This form doesn&apos;t book you in automatically — it opens a pre-filled WhatsApp (or email) message
            for you to send us. We&apos;ll confirm availability and payment details directly with you.
          </p>
        </div>
      </div>
    </div>
  );
}
