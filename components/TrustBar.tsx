import { BadgeCheck, Building2, Clock, ShieldCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Government Approved" },
  { icon: BadgeCheck, label: "BAIRA Licensed" },
  { icon: Clock, label: "15+ Years of Service" },
  { icon: Building2, label: "20+ Countries Served" },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Credentials and trust markers"
      className="border-b border-slate-200 bg-white py-10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">


          {/* Items */}
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {items.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="group flex items-center gap-2.5 text-sm font-medium text-slate-700"
              >
                <span className="grid h-8 w-8 place-items-center rounded-md bg-brand/5 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon size={15} strokeWidth={2} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}