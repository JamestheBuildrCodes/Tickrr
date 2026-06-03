import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Sparkline from "@/components/Sparkline";
import { leaderboard } from "@/lib/data";
import { Trophy } from "@/components/icons";

const rankColor = (rank: number) =>
  rank === 1
    ? "text-[var(--th-accent)]"
    : rank === 2
      ? "text-[#cbd5e1]"
      : rank === 3
        ? "text-[#e0a06a]"
        : "text-[var(--th-faint)]";

export default function Leaderboard() {
  return (
    <section id="rankings" className="py-24">
      <div className="th-container">
        <SectionHeading
          eyebrow="Verified rankings"
          title="Climb the global"
          highlight="leaderboard"
          subtitle="No screenshots. No vibes. Rankings are computed from verified, broker-connected performance — so the people you follow have actually earned it."
        />

        <Reveal className="mt-14">
          <div className="th-card overflow-hidden">
            <div className="hidden sm:grid grid-cols-[60px_1.4fr_1fr_0.8fr_0.8fr_1fr] gap-4 px-6 py-4 text-xs uppercase tracking-wider text-[var(--th-faint)] border-b border-[var(--th-border)]">
              <span>Rank</span>
              <span>Trader</span>
              <span>Market</span>
              <span>30D ROI</span>
              <span>Win</span>
              <span className="text-right">Trend</span>
            </div>

            <ul>
              {leaderboard.map((t, i) => (
                <li
                  key={t.handle}
                  className="grid grid-cols-2 sm:grid-cols-[60px_1.4fr_1fr_0.8fr_0.8fr_1fr] gap-4 px-6 py-4 items-center border-b border-[var(--th-border)] last:border-0 transition-colors hover:bg-white/[0.025]"
                  style={{ animation: `th-rise 0.5s ease both`, animationDelay: `${i * 70}ms` }}
                >
                  <span className={`flex items-center gap-1 font-bold text-lg ${rankColor(t.rank)}`}>
                    {t.rank <= 3 && <Trophy width={16} height={16} />}#{t.rank}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-full bg-[var(--th-primary)]/15 text-[var(--th-primary)] text-sm font-bold">
                      {t.name.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold flex items-center gap-2">
                        <span className="truncate">{t.name}</span>
                        {t.badge && (
                          <span className="th-chip !py-0.5 !px-2 !text-[0.65rem]">{t.badge}</span>
                        )}
                      </p>
                      <p className="text-xs text-[var(--th-faint)]">{t.handle}</p>
                    </div>
                  </div>

                  <span className="text-sm text-[var(--th-muted)]">{t.market}</span>
                  <span className="text-sm font-bold text-[var(--th-primary)]">{t.roi}</span>
                  <span className="text-sm text-[var(--th-muted)]">{t.win}</span>
                  <span className="hidden sm:flex justify-end">
                    <Sparkline data={t.trend} width={110} height={32} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
