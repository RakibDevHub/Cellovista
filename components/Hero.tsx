import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { stats } from "@/lib/data";

const destinations = [
  { code: "my", name: "Malaysia" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "ae", name: "UAE" },
  { code: "qa", name: "Qatar" },
  { code: "om", name: "Oman" },
  { code: "kw", name: "Kuwait" },
  { code: "jo", name: "Jordan" },
  { code: "sg", name: "Singapore" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-brand-dark pt-40 pb-20">
      {/* Photo background */}
      <div
        aria-hidden
        className="hero-parallax absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      {/* Navy overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(5,37,63,0.97) 0%, rgba(10,61,98,0.9) 45%, rgba(10,61,98,0.55) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <p
              className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent animate-[fade-up_0.6s_ease-out_both]"
              style={{ animationDelay: "100ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              BAIRA Licensed · Reg. No. RL-2037
            </p>

            <h1
              className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem] animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_both]"
              style={{ animationDelay: "200ms" }}
            >
              Your pathway to{" "}
              <span className="text-accent">global careers</span> starts here.
            </h1>

            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_both]"
              style={{ animationDelay: "320ms" }}
            >
              For over 15 years, Cellovista Group has placed thousands of
              skilled Bangladeshi professionals with reputable employers
              worldwide — ethically, transparently, and without hidden fees.
            </p>

            <div
              className="mt-9 flex flex-wrap gap-3 animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_both]"
              style={{ animationDelay: "440ms" }}
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-brand-dark transition-all hover:bg-accent-hover hover:gap-3"
              >
                Start Your Application
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
{/* 
            <ul
              className="mt-10 flex flex-wrap gap-x-7 gap-y-3 animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_both]"
              style={{ animationDelay: "560ms" }}
            >
              {[
                "Government Approved",
                "Zero Hidden Fees",
                "15+ Years of Service",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-white/75"
                >
                  <Check size={15} className="text-accent" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul> */}
          </div>

          {/* Right: stats panel */}
          <div
            className="lg:col-span-5 animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_both]"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative rounded-lg border border-white/15 bg-white/[0.06] p-8 backdrop-blur-md">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  By the Numbers
                </p>
                <span className="rounded-sm bg-accent/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                  Since 2009
                </span>
              </div>

              <dl className="grid grid-cols-2 gap-y-7 pt-7">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="text-4xl font-bold tracking-tight text-accent">
                      {stat.number}
                    </dd>
                    <dt className="mt-1.5 text-xs font-medium text-white/70">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-xs leading-relaxed text-white/60">
                  A licensed member of the Bangladesh Association of
                  International Recruiting Agencies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Destination strip */}
        <div
          className="mt-20 border-t border-white/10 pt-6 animate-[fade-up_1s_cubic-bezier(0.16,1,0.3,1)_both]"
          style={{ animationDelay: "700ms" }}
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Trusted by employers in
          </p>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {destinations.map((c) => (
              <li
                key={c.code}
                className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Image
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  alt={`${c.name} flag`}
                  width={20}
                  height={15}
                  className="rounded-[2px] ring-1 ring-white/10"
                  unoptimized
                />
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll cue */}
      {/* <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <span className="relative h-8 w-[1px] overflow-hidden bg-white/20">
          <span className="absolute inset-x-0 top-0 h-3 animate-scroll-cue bg-accent" />
        </span>
      </div> */}
    </section>
  );
}