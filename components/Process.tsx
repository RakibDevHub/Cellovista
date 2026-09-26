import { processSteps } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A Clear, Four-Step Process
          </h2>
          <p className="mt-4 text-slate-600">
            Designed to get you working abroad as quickly and transparently as
            possible.
          </p>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent lg:block"
            style={{ marginInline: "calc(12.5% + 24px)" }}
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 100}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 border-accent bg-white text-sm font-bold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <h3 className="mt-6 text-base font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}