import { portswigger } from "@/data/profile";
import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";

const R = 26;
const CIRC = 2 * Math.PI * R;

function DonutRing({ pct, label, count }: { pct: number; label: string; count: string }) {
  const filled = CIRC * (pct / 100);
  return (
    <div className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 64 64" className="w-16 h-16" aria-hidden>
        {/* track */}
        <circle cx="32" cy="32" r={R} fill="none" stroke="hsl(var(--graphite))" strokeWidth="4" />
        {/* fill */}
        <circle
          cx="32"
          cy="32"
          r={R}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeDasharray={`${filled} ${CIRC - filled}`}
          strokeLinecap="square"
          transform="rotate(-90 32 32)"
        />
        <text
          x="32"
          y="36"
          textAnchor="middle"
          fontSize="11"
          fill="hsl(var(--fg))"
          fontFamily="JetBrains Mono, monospace"
        >
          {count}
        </text>
      </svg>
      <span className="label">{label}</span>
    </div>
  );
}

const tryhackme = {
  handle: "pixos",
  rank: "[0xC][GURU]",
  top: "2%",
  globalRank: 37688,
  badges: 11,
};

export default function Stats() {
  return (
    <section id="stats" className="shell section-pad cv-auto">
      <SectionHeader index="03" title="Stats" />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* PortSwigger */}
        <ScrollReveal>
          <div className="border border-line bg-surface p-6 h-full">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <p className="label text-muted">PortSwigger Web Security Academy</p>
              <span className="label text-muted">{portswigger.completedDate}</span>
            </div>

            <div className="mt-3 flex items-baseline gap-3 flex-wrap">
              <span className="heading text-fluid-xl text-primary">EXPERT</span>
              <span className="label text-muted">
                {portswigger.totalLabs} labs &middot; 100% &middot; Rank{" "}
                <span className="text-primary">#849</span>
              </span>
            </div>

            <div className="mt-6 flex justify-around gap-4">
              {portswigger.tiers.map((tier) => (
                <DonutRing
                  key={tier.name}
                  pct={(tier.completed / tier.total) * 100}
                  label={tier.name}
                  count={`${tier.completed}/${tier.total}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* TryHackMe */}
        <ScrollReveal>
          <div className="border border-line bg-surface p-6 h-full">
            <p className="label text-muted">TryHackMe</p>

            <div className="mt-3 flex items-baseline gap-3 flex-wrap">
              <span className="heading text-fluid-base text-fg">{tryhackme.handle}</span>
              <span className="label text-primary">{tryhackme.rank}</span>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-line pt-4">
              <div>
                <dt className="label text-muted">Global top</dt>
                <dd className="heading text-fluid-lg text-primary mt-1">{tryhackme.top}</dd>
              </div>
              <div>
                <dt className="label text-muted">Global rank</dt>
                <dd className="heading text-fluid-lg text-fg mt-1">#{tryhackme.globalRank.toLocaleString()}</dd>
              </div>
              <div>
                <dt className="label text-muted">Badges</dt>
                <dd className="heading text-fluid-lg text-fg mt-1">{tryhackme.badges}</dd>
              </div>
            </dl>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
