import Image from "next/image";
import { Mail } from "lucide-react";
import { team } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Inline brand SVGs (Lucide no longer ships these)
function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Our Team
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            The People Behind Cellovista
          </h2>
          <p className="mt-4 text-slate-600">
            A dedicated team of professionals committed to ethical recruitment,
            transparent processes, and the wellbeing of every worker we deploy.
          </p>
        </header>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => {
            const hasImage = Boolean(member.image);
            return (
              <li
                key={member.name + member.role}
                className="group rounded-3xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full ring-4 ring-brand/5">
                  {hasImage ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-brand to-brand-light text-2xl font-extrabold text-white">
                      {initials(member.name)}
                    </div>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-accent">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {member.bio}
                </p>

                {member.socials &&
                  Object.values(member.socials).some(Boolean) && (
                    <div className="mt-5 flex justify-center gap-2">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-500 transition-colors hover:bg-[#0A66C2] hover:text-white"
                        >
                          <LinkedinIcon />
                        </a>
                      )}
                      {member.socials.facebook && (
                        <a
                          href={member.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on Facebook`}
                          className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-500 transition-colors hover:bg-[#1877F2] hover:text-white"
                        >
                          <FacebookIcon />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={`mailto:${member.socials.email}`}
                          aria-label={`Email ${member.name}`}
                          className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-500 transition-colors hover:bg-brand hover:text-white"
                        >
                          <Mail size={15} />
                        </a>
                      )}
                    </div>
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
