import { Check, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, whyUsPoints } from "@/lib/data";
import CopyPhoneButton from "./ui/CopyPhoneButton";

export default function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left: content */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Why Cellovista
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by Workers and Employers Alike
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            With years of experience in international recruitment, we&apos;ve
            built a reputation for integrity, reliability, and genuine care for
            the people we serve.
          </p>

          <ul className="mt-8 space-y-5">
            {whyUsPoints.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={14} strokeWidth={3} />
                </span>
                <div>
                  <strong className="block text-sm font-semibold text-slate-900">
                    {point.title}
                  </strong>
                  <span className="text-sm text-slate-600">
                    {point.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: contact card */}
        <aside className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-light p-10 text-white shadow-2xl shadow-brand/30">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/5"
          />
          <h3 className="relative text-xl font-bold">Visit Our Office</h3>
          <address className="relative mt-6 space-y-5 text-sm not-italic">
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
        </aside>
      </div>
    </section>
  );
}