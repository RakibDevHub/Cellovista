import { BadgeCheck, Clock, ShieldCheck, Users } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Government Approved" },
  { icon: BadgeCheck, label: "Ethical Recruitment" },
  { icon: Clock, label: "Fast Processing" },
  { icon: Users, label: "Dedicated Support" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-slate-200 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 text-sm font-medium text-slate-500"
          >
            <Icon size={20} strokeWidth={2} className="text-brand" />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}