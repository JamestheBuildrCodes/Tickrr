import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Sparkline from "@/components/Sparkline";
import { Check, CopyTrade, Robot, ShieldCheck } from "@/components/icons";

function CopyTradingVisual() {
  return (
    <div className="relative">
      <div className="th-card p-5 glow-ring">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold flex items-center gap-2">
            <CopyTrade width={18} height={18} className="text-[var(--th-primary)]" /> Smart Copy
          </p>
          <span className="th-chip">Live</span>
        </div>
        <div className="mt-4 space-y-3">
          {[
            ["Amara Okoye", "Forex", "+218%"],
            ["Kai Nakamura", "Crypto", "+187%"],
          ].map(([name, mkt, roi]) => (
            <div key={name} className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-[var(--th-border)] px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[var(--th-primary)]/15 grid place-items-center text-xs font-bold text-[var(--th-primary)]">
                  {name.charAt(0)}
                </span>
                <div>
                  <p className="text-xs font-semibold">{name}</p>
                  <p className="text-[0.65rem] text-[var(--th-faint)]">{mkt} · copying</p>
                </div>
              </div>
              <span className="text-sm font-bold text-[var(--th-primary)]">{roi}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-[var(--th-muted)]">
          <span>Risk cap 2% / trade</span>
          <span className="flex items-center gap-1 text-[var(--th-accent)]">
            <ShieldCheck width={13} height={13} /> Delay Protection on
          </span>
        </div>
      </div>
      <Parallax speed={0.2} className="absolute -bottom-6 -right-4 w-40">
        <div className="th-card anim-float p-3">
          <p className="text-[0.65rem] text-[var(--th-faint)]">Portfolio</p>
          <p className="text-lg font-bold text-[var(--th-primary)]">+34.6%</p>
          <Sparkline data={[5, 8, 7, 12, 16, 15, 22, 27]} width={120} height={28} />
        </div>
      </Parallax>
    </div>
  );
}

function AiVisual() {
  return (
    <div className="relative">
      <div className="th-card p-5 glow-ring">
        <p className="text-sm font-semibold flex items-center gap-2">
          <Robot width={18} height={18} className="text-[var(--th-primary)]" /> AI Co-Pilot
        </p>
        <div className="mt-4 rounded-xl bg-[#04101c] border border-[var(--th-border)] p-4 font-mono text-xs leading-relaxed">
          <p className="text-[var(--th-faint)]">› analyze EURUSD 1H</p>
          <p className="mt-2 text-[var(--th-text)]">
            Liquidity sweep below Asian low, displacement up into FVG.
          </p>
          <p className="mt-1 text-[var(--th-primary)]">Plan: long 1.0840 · SL 1.0822 · TP 1.0895</p>
          <p className="mt-1 text-[var(--th-accent)]">R:R 3.1 · setup win-rate 68% (n=412)</p>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-[var(--th-muted)]">
          <span className="anim-bounce-soft inline-block w-2 h-2 rounded-full bg-[var(--th-primary)]" />
          Reviewing your journal for overtrading…
        </div>
      </div>
    </div>
  );
}

const blocks = [
  {
    id: "copy",
    eyebrow: "Smart Copy Trading",
    title: "Follow the proven.",
    highlight: "Copy with control.",
    body: "Mirror verified traders with your own position sizing and risk caps. Trade Delay Protection keeps signals fair, so copiers get real fills — not picked-off entries.",
    points: [
      "Per-trade and portfolio risk limits",
      "Connect via broker / exchange APIs (no custody)",
      "Auto-tracked copier performance",
    ],
    visual: <CopyTradingVisual />,
    flip: false,
  },
  {
    id: "ai",
    eyebrow: "AI Chart Co-Pilot",
    title: "An analyst that never sleeps.",
    highlight: "",
    body: "Drop in any chart or screenshot. The AI marks structure, proposes a trade plan with R:R, and coaches your journal — flagging revenge trading and cut-too-early winners.",
    points: [
      "Multimodal chart reading & annotation",
      "Natural-language market screener",
      "Behavioral journal coach",
    ],
    visual: <AiVisual />,
    flip: true,
  },
];

export default function Spotlight() {
  return (
    <section className="py-12">
      <div className="th-container space-y-24">
        {blocks.map((b) => (
          <div
            key={b.id}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <Reveal className={b.flip ? "lg:order-2" : ""}>
              <span className="th-chip">{b.eyebrow}</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
                {b.title} {b.highlight && <span className="th-gradient-text">{b.highlight}</span>}
              </h2>
              <p className="mt-4 text-[var(--th-muted)] text-lg max-w-lg">{b.body}</p>
              <ul className="mt-6 space-y-3">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[var(--th-text)]">
                    <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-full bg-[var(--th-primary)]/20 text-[var(--th-primary)]">
                      <Check width={13} height={13} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className={b.flip ? "lg:order-1" : ""}>
              {b.visual}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
