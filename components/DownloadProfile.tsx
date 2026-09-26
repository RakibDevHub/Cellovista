"use client";

import { Download, FileText } from "lucide-react";
import { COMPANY_PROFILE } from "@/lib/data";
import { track } from "@/lib/analytics";

export default function DownloadProfile() {
  function handleDownload() {
    track({
      action: "download_profile",
      category: "lead",
      label: "company_profile_pdf",
    });
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-light p-10 sm:p-14">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5"
          />
          <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-white">
                <FileText size={26} />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-white">
                  Download Our Company Profile
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">
                  Full overview of our services, certifications, leadership
                  team, and track record. Ideal for employers evaluating us as a
                  recruitment partner.
                </p>
                <p className="mt-2 text-xs text-white/50">
                  PDF · {COMPANY_PROFILE.size}
                </p>
              </div>
            </div>

            <a
              href={COMPANY_PROFILE.url}
              download={COMPANY_PROFILE.filename}
              onClick={handleDownload}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              <Download size={16} strokeWidth={2.5} />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}