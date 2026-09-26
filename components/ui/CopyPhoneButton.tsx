"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { CONTACT } from "@/lib/data";
import { track } from "@/lib/analytics";

export default function CopyPhoneButton() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(CONTACT.phone);
      setCopied(true);
      track({ action: "copy_phone", category: "engagement" });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — silently ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy phone number"
      className="ml-1 inline-grid h-7 w-7 place-items-center rounded-lg bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
}