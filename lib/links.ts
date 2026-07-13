import { contact } from "@/content/site";

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${contact.whatsappNumber}?text=${encoded}`;
}

export function buildMailtoUrl(subject: string, body: string) {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${contact.email}?subject=${encodedSubject}&body=${encodedBody}`;
}
