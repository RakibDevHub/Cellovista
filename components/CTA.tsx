import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import CopyPhoneButton from "./ui/CopyPhoneButton";
import { CONTACT, WHATSAPP_LINK } from "@/lib/data";

function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/60 py-24"
    >
      <div
        aria-hidden
        className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(10,61,98,0.06), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Get in Touch
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-slate-600">
            Whether you&apos;re a skilled worker seeking opportunities abroad or
            an employer looking for reliable manpower, we&apos;re here to help.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: contact info + socials */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-light p-8 text-white shadow-2xl shadow-brand/30">
              <h3 className="text-lg font-bold">Contact Information</h3>
              <address className="mt-6 space-y-5 text-sm not-italic">
                <div className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                    <MapPin size={18} />
                  </span>
                  <span className="pt-1.5 leading-relaxed text-white/90">
                    {CONTACT.address}
                  </span>
                </div>
                <div className="flex items-center gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                    <Phone size={18} />
                  </span>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="text-white/90 transition-colors hover:text-white"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                  <CopyPhoneButton />
                </div>
                <div className="flex items-center gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                    <Mail size={18} />
                  </span>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="break-all text-white/90 transition-colors hover:text-white"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </address>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-[#1877F2] hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#1877F2]/10 text-[#1877F2] transition-colors group-hover:bg-[#1877F2] group-hover:text-white">
                  <FacebookIcon />
                </span>
                <span className="text-xs font-semibold text-slate-700">
                  Follow on Facebook
                </span>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-[#25D366] hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                  <WhatsAppIcon />
                </span>
                <span className="text-xs font-semibold text-slate-700">
                  Chat on WhatsApp
                </span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}