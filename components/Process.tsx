import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            How It Works
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Your Journey to Overseas Employment
          </h2>
          <p className="mt-4 text-slate-600">
            A simple, transparent process designed to get you working abroad as
            quickly as possible.
          </p>
        </header>

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl bg-white p-8 pt-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <span className="absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border-[3px] border-slate-50 bg-brand text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-2 text-base font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}