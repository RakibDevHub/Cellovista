import { Check, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, whyUsPoints } from "@/lib/data";
import CopyPhoneButton from "./ui/CopyPhoneButton";
import Reveal from "./ui/Reveal";

export default function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left: content */}
        <Reveal>
          <div>
            <p className="eyebrow">Why Cellovista</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Trusted by Workers and Employers Alike
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              With over 15 years in international recruitment, we&apos;ve built
              a reputation for integrity, reliability, and genuine care for the
              people we serve.
            </p>

            <ul className="mt-8 space-y-5">
              {whyUsPoints.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check size={13} strokeWidth={3} />
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
        </Reveal>

        {/* Right: contact panel */}
        <Reveal delay={150}>
          <aside className="rounded-lg bg-brand-dark p-10 text-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Visit Our Office
              </p>
            </div>

            <address className="mt-7 space-y-6 text-sm not-italic">
              <div className="flex items-start gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white/5 text-accent">
                  <MapPin size={17} />
                </span>
                <span className="pt-2 leading-relaxed text-white/80">
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

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-xs text-white/50">
                Office hours: Sunday – Thursday, 9:00 AM – 6:00 PM (BST)
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
