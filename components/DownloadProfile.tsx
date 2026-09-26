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
    <section className="relative overflow-hidden bg-brand-dark py-14">
      {/* Photo background */}
      <div
        aria-hidden
        className="hero-parallax absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Navy overlay for readability */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "rgba(5,37,63,0.75)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-white/5 text-accent">
              <FileText size={22} />
            </span>
            <div>
              <h2 className="text-lg font-bold text-white">
                Download Our Company Profile
              </h2>
              <p className="mt-1 max-w-xl text-sm text-white/60">
                Full overview of our services, certifications, leadership team,
                and track record — ideal for employers evaluating us.
              </p>
              <p className="mt-1.5 text-[11px] text-white/40">
                PDF · {COMPANY_PROFILE.size}
              </p>
            </div>
          </div>

          <a
            href={COMPANY_PROFILE.url}
            download={COMPANY_PROFILE.filename}
            onClick={handleDownload}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-accent-hover"
          >
            <Download size={15} strokeWidth={2.5} />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
