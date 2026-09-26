import { services } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow">Our Services</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Complete Overseas Employment Solutions
          </h2>
          <p className="mt-4 text-slate-600">
            From sourcing to deployment, we handle every step of the
            recruitment process with professionalism and care.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 60}>
              <article className="group relative h-full overflow-hidden rounded-lg border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-slate-900/5">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                <div className="mb-6 grid h-12 w-12 place-items-center rounded-md border border-slate-200 bg-white text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                <h3 className="text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}