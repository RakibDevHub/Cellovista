import Image from "next/image";
import { Mail } from "lucide-react";
import { team } from "@/lib/data";
import Reveal from "./ui/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The People Behind Cellovista
          </h2>
          <p className="mt-4 text-slate-600">
            A dedicated team committed to ethical recruitment, transparent
            processes, and the wellbeing of every worker we deploy.
          </p>
        </Reveal>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => {
            const hasImage = Boolean(member.image);
            return (
              <li key={member.name + member.role}>
                <Reveal delay={i * 80}>
                  <div className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition-colors hover:border-brand/40">
                    {/* Portrait */}
                    <div className="relative aspect-[4/5] bg-brand-dark">
                      {hasImage ? (
                        <Image
                          src={member.image}
                          alt={`${member.name} — ${member.role}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover"
                        />
                      ) : (
                        <>
                          <div className="grid h-full w-full place-items-center">
                            <span className="text-4xl font-bold tracking-tight text-accent/90">
                              {initials(member.name)}
                            </span>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-deeper to-transparent" />
                        </>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-slate-900">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                        {member.role}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {member.bio}
                      </p>

                      {member.socials &&
                        Object.values(member.socials).some(Boolean) && (
                          <div className="mt-4 flex gap-1.5 border-t border-slate-100 pt-4">
                            {member.socials.linkedin && (
                              <a
                                href={member.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name} on LinkedIn`}
                                className="grid h-8 w-8 place-items-center rounded-md text-slate-500 transition-colors hover:bg-[#0A66C2] hover:text-white"
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
                                className="grid h-8 w-8 place-items-center rounded-md text-slate-500 transition-colors hover:bg-[#1877F2] hover:text-white"
                              >
                                <FacebookIcon />
                              </a>
                            )}
                            {member.socials.email && (
                              <a
                                href={`mailto:${member.socials.email}`}
                                aria-label={`Email ${member.name}`}
                                className="grid h-8 w-8 place-items-center rounded-md text-slate-500 transition-colors hover:bg-brand hover:text-white"
                              >
                                <Mail size={15} />
                              </a>
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}