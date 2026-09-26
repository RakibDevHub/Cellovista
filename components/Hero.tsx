import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/60 pb-24 pt-40">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(10,61,98,0.06), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,169,61,0.08), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/10 bg-brand/5 px-4 py-2 text-xs font-semibold text-brand">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            BAIRA Licensed | Reg. No. 2037
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
            Your Trusted Partner for{" "}
            <span className="text-brand">Global Manpower</span> Solutions
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Cellovista Group BD connects skilled Bangladeshi professionals with
            reputable international employers. We make overseas employment
            simple, ethical, and secure.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-xl"
            >
              Start Your Application
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand/20 px-7 py-3.5 text-sm font-semibold text-brand transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand/5"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right: stats card */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl shadow-slate-900/10">
            <div className="absolute -top-0.5 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-brand to-accent" />
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-slate-50 p-5 text-center"
                >
                  <div className="text-3xl font-extrabold tracking-tight text-brand">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-xs font-medium text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}