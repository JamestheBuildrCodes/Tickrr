import WordReveal from "@/components/WordReveal";
import Parallax from "@/components/Parallax";
import Sparkline from "@/components/Sparkline";
import WaitlistForm from "@/components/WaitlistForm";
import { ShieldCheck, Sparkle, ArrowRight } from "@/components/icons";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Parallax ambient blobs */}
      <Parallax speed={0.25} className="pointer-events-none absolute -top-10 right-[6%] -z-10">
        <div className="w-72 h-72 rounded-full bg-[var(--th-primary)]/20 blur-[90px]" />
      </Parallax>
      <Parallax speed={-0.18} className="pointer-events-none absolute top-40 left-[2%] -z-10">
        <div className="w-64 h-64 rounded-full bg-[var(--th-primary-2)]/20 blur-[90px]" />
      </Parallax>

      <div className="th-container grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <span className="th-chip anim-pulse-glow">
            <Sparkle width={14} height={14} /> Now in private beta
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            <WordReveal text="Where traders" />
            <br className="hidden sm:block" />
            <WordReveal text="learn, talk, and trade" highlightFrom={2} />
            <br className="hidden sm:block" />
            <WordReveal text="together." />
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[var(--th-muted)] reveal is-visible">
            TradeHive is the social trading platform with{" "}
            <span className="text-[var(--th-text)]">verified track records</span>, global rankings,
            smart copy trading, and an AI co-pilot that reads your charts — across Forex, Crypto,
            Synthetics &amp; Stocks.
          </p>

          <div className="mt-8 max-w-md">
            <WaitlistForm />
            <p className="mt-3 flex items-center gap-2 text-sm text-[var(--th-faint)]">
              <ShieldCheck width={16} height={16} className="text-[var(--th-primary)]" />
              No spam. Founders get permanent badges.
            </p>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["62k+", "traders on the waitlist"],
              ["4", "markets, one community"],
              ["100%", "verified performance"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="text-2xl font-bold th-gradient-text">{n}</dt>
                <dd className="text-sm text-[var(--th-muted)]">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Floating dashboard cluster */}
        <div className="relative h-[420px] sm:h-[480px]">
          <Parallax speed={0.12} className="absolute inset-0">
            <div className="th-card anim-float-slow absolute right-0 top-4 w-[88%] p-5 glow-ring">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[var(--th-primary)]/15 grid place-items-center text-[var(--th-primary)] text-sm font-bold">A</span>
                  <div>
                    <p className="text-sm font-semibold">Amara Okoye</p>
                    <p className="text-xs text-[var(--th-faint)]">@amaraFX · Forex</p>
                  </div>
                </div>
                <span className="th-chip">Verified</span>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-xs text-[var(--th-faint)]">30D Return</p>
                  <p className="text-2xl font-bold text-[var(--th-primary)]">+218%</p>
                </div>
                <Sparkline data={[10, 14, 12, 20, 26, 24, 33, 40]} width={150} height={48} />
              </div>
            </div>
          </Parallax>

          <Parallax speed={0.3} className="absolute inset-0">
            <div className="th-card anim-float absolute left-0 bottom-6 w-[70%] p-4">
              <p className="text-xs text-[var(--th-faint)]">AI Co-Pilot</p>
              <p className="mt-1 text-sm leading-snug">
                <span className="text-[var(--th-primary)]">BTC</span> reclaimed range high on volume.
                Bias: <span className="font-semibold">long</span> above 68.2k, invalidation 66.9k.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-[var(--th-accent)]">
                <Sparkle width={13} height={13} /> R:R 3.2 · 71% historical edge
              </div>
            </div>
          </Parallax>

          <Parallax speed={-0.1} className="absolute inset-0">
            <div className="th-card anim-bounce-soft absolute right-6 bottom-0 w-[46%] p-4 flex items-center gap-3">
              <span className="text-2xl font-bold th-gradient-text">#1</span>
              <div>
                <p className="text-xs text-[var(--th-faint)]">Global rank</p>
                <p className="text-sm font-semibold flex items-center gap-1">
                  Climbing <ArrowRight width={14} height={14} className="text-[var(--th-primary)]" />
                </p>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
