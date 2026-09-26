"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Award, ChevronLeft, ChevronRight, X } from "lucide-react";
import { certificates } from "@/lib/data";
import { track } from "@/lib/analytics";

export default function Certificates() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const current = openIndex !== null ? certificates[openIndex] : null;

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight")
        setOpenIndex((i) => ((i ?? 0) + 1) % certificates.length);
      if (e.key === "ArrowLeft")
        setOpenIndex(
          (i) => ((i ?? 0) - 1 + certificates.length) % certificates.length,
        );
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function open(i: number) {
    setOpenIndex(i);
    track({
      action: "certificate_view",
      category: "engagement",
      label: certificates[i].title,
    });
  }

  return (
    <section id="certificates" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Certifications
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Licensed, Registered & Government Approved
          </h2>
          <p className="mt-4 text-slate-600">
            Cellovista Group BD operates with full legal compliance. Every
            certificate below is verifiable with the issuing authority.
          </p>
        </header>

        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {certificates.map((cert, i) => (
            <li key={cert.id}>
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`View ${cert.title}`}
                className="group w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} — ${cert.issuer}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-brand/0 transition-colors duration-300 group-hover:bg-brand/60">
                    <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Certificate
                    </span>
                  </div>
                  <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-accent text-slate-900 shadow-md">
                    <Award size={16} strokeWidth={2.5} />
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="line-clamp-2 text-sm font-bold text-slate-900">
                    {cert.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-slate-500">
                    {cert.issuer}
                  </p>
                  {cert.regNo && (
                    <p className="mt-2 inline-block rounded-md bg-brand/5 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-brand">
                      {cert.regNo}
                    </p>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-slate-500">
          All certificates are verifiable with the issuing authority. Need a
          copy for compliance?{" "}
          <a
            href="#contact"
            className="font-semibold text-brand hover:underline"
          >
            Contact us
          </a>
          .
        </p>
      </div>

      {/* Lightbox */}
      {isOpen && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} certificate`}
          className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-slate-900/85 p-4 backdrop-blur-md"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(
                (i) =>
                  ((i ?? 0) - 1 + certificates.length) % certificates.length,
              );
            }}
            aria-label="Previous certificate"
            className="absolute left-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => ((i ?? 0) + 1) % certificates.length);
            }}
            aria-label="Next certificate"
            className="absolute right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] max-h-[75vh] w-full overflow-hidden rounded-2xl bg-white shadow-2xl">
              <Image
                src={current.image}
                alt={`${current.title} — ${current.issuer}`}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 640px"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="text-base font-bold">{current.title}</h3>
              <p className="mt-1 text-xs text-white/70">{current.issuer}</p>
              {current.regNo && (
                <p className="mt-2 inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide">
                  {current.regNo}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
