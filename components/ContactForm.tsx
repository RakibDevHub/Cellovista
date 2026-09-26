"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { sendContactEmail, type ContactState } from "@/app/actions/sendEmail";
import { SERVICES_OPTIONS } from "@/lib/data";
import { track } from "@/lib/analytics";

const initialState: ContactState = { success: false, message: "" };
const MAX_MESSAGE = 2000;

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const [msgLen, setMsgLen] = useState(0);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setMsgLen(0);
      track({ action: "form_submit", category: "lead", label: "contact_form" });
    }
  }, [state.success]);

  const fieldError = (field: string) => state.errors?.[field]?.[0];
  const nearLimit = msgLen > MAX_MESSAGE * 0.9;

  const inputClass =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/15 disabled:opacity-60";

  return (
    <form
      ref={formRef}
      action={formAction}
      className="rounded-lg border border-slate-200 bg-white p-8 sm:p-10"
      noValidate
    >
      <div className="border-b border-slate-100 pb-5">
        <p className="eyebrow">Send an Inquiry</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Tell us how we can help
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          We usually respond within 24 hours.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-xs font-semibold text-slate-700"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              disabled={isPending}
              className={inputClass}
              placeholder="Your name"
            />
            {fieldError("name") && (
              <p className="mt-1.5 text-xs text-rose-600">{fieldError("name")}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-semibold text-slate-700"
            >
              Email <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={isPending}
              className={inputClass}
              placeholder="you@example.com"
            />
            {fieldError("email") && (
              <p className="mt-1.5 text-xs text-rose-600">
                {fieldError("email")}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-xs font-semibold text-slate-700"
            >
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              disabled={isPending}
              className={inputClass}
              placeholder="+880 1XXX-XXXXXX"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="mb-1.5 block text-xs font-semibold text-slate-700"
            >
              Service of Interest <span className="text-rose-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              disabled={isPending}
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select a service…
              </option>
              {SERVICES_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {fieldError("service") && (
              <p className="mt-1.5 text-xs text-rose-600">
                {fieldError("service")}
              </p>
            )}
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-baseline justify-between">
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-slate-700"
            >
              Message <span className="text-rose-500">*</span>
            </label>
            <span
              aria-live="polite"
              className={`text-[11px] font-medium tabular-nums ${
                nearLimit ? "text-rose-500" : "text-slate-400"
              }`}
            >
              {msgLen} / {MAX_MESSAGE}
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={MAX_MESSAGE}
            disabled={isPending}
            onChange={(e) => setMsgLen(e.target.value.length)}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about the position, country, or role you're interested in…"
          />
          {fieldError("message") && (
            <p className="mt-1.5 text-xs text-rose-600">
              {fieldError("message")}
            </p>
          )}
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company (leave blank)</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {state.message && (
          <div
            role="status"
            className={`flex items-start gap-3 rounded-md px-4 py-3 text-sm ${
              state.success
                ? "bg-emerald-50 text-emerald-800"
                : "bg-rose-50 text-rose-800"
            }`}
          >
            {state.success ? (
              <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
            ) : (
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
            )}
            <span>{state.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={15} strokeWidth={2.5} />
              Send Inquiry
            </>
          )}
        </button>

        <p className="text-center text-xs text-slate-400">
          Your information is kept private and never shared.
        </p>
      </div>
    </form>
  );
}