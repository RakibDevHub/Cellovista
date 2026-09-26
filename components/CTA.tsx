import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import CopyPhoneButton from "./ui/CopyPhoneButton";
import { CONTACT, WHATSAPP_LINK } from "@/lib/data";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow eyebrow-center justify-center">Get in Touch</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-slate-600">
            Whether you&apos;re a skilled worker seeking opportunities abroad or
            an employer looking for reliable manpower, we&apos;re here to help.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* ===== Left: contact card with socials + map ===== */}
          <div className="rounded-lg bg-brand-dark p-8 text-white">
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Contact Information
              </p>
            </div>

            <address className="mt-7 space-y-5 text-sm not-italic">
              <div className="flex items-start gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white/5 text-accent">
                  <MapPin size={17} />
                </span>
                <span className="leading-relaxed text-white/80">
                  {CONTACT.address}
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white/5 text-accent">
                  <Phone size={17} />
                </span>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {CONTACT.phoneDisplay}
                </a>
                <CopyPhoneButton />
              </div>

              <div className="flex items-center gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white/5 text-accent">
                  <Mail size={17} />
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all text-white/80 transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </div>
            </address>

            {/* Socials */}
            <div className="mt-7 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 hover:text-white"
              >
                <span className="grid h-6 w-6 place-items-center text-[#1877F2]">
                  <FacebookIcon />
                </span>
                Facebook
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-white"
              >
                <span className="grid h-6 w-6 place-items-center text-[#25D366]">
                  <WhatsAppIcon />
                </span>
                WhatsApp
              </a>
            </div>

            {/* Google Map */}
            <div className="mt-6 overflow-hidden rounded-md border border-white/10">
              <iframe
                title="Cellovista Group BD office location on Google Maps"
                src="https://maps.google.com/maps?q=Banani%2C%20Dhaka%201213%2C%20Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 border-t border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                <span>Get directions to our office</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* ===== Right: form ===== */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}