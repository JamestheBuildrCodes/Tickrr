import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { heatmap } from "@/lib/data";

function cellStyle(value: number) {
  const intensity = Math.min(Math.abs(value) / 80, 1);
  const alpha = 0.12 + intensity * 0.5;
  const color = value >= 0 ? `22, 214, 163` : `244, 83, 107`;
  return {
    background: `rgba(${color}, ${alpha})`,
    borderColor: `rgba(${color}, ${0.3 + intensity * 0.4})`,
  };
}

export default function Heatmap() {
  return (
    <section id="sentiment" className="py-24">
      <div className="th-container grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <div>
          <SectionHeading
            center={false}
            eyebrow="Community Sentiment Heatmap"
            title="See where the"
            highlight="hive leans"
            subtitle="Real-time bullish/bearish sentiment across Forex, Crypto, Synthetics and Stocks — aggregated from thousands of verified traders, not anonymous noise."
          />
          <Reveal delay={120} className="mt-6 flex items-center gap-5 text-sm text-[var(--th-muted)]">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[var(--th-primary)]" /> Bullish
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[var(--th-danger)]" /> Bearish
            </span>
            <span className="text-[var(--th-faint)]">Updated live</span>
          </Reveal>
        </div>

        <Reveal>
          <div className="th-card p-5">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {heatmap.map((cell, i) => (
                <div
                  key={cell.symbol}
                  className="rounded-xl border p-3 transition-transform duration-300 hover:scale-[1.06]"
                  style={{
                    ...cellStyle(cell.value),
                    animation: `th-rise 0.5s ease both`,
                    animationDelay: `${i * 45}ms`,
                  }}
                >
                  <p className="text-xs font-mono text-[var(--th-text)]/80">{cell.symbol}</p>
                  <p
                    className={`mt-1 text-lg font-bold ${
                      cell.value >= 0 ? "text-[var(--th-primary)]" : "text-[var(--th-danger)]"
                    }`}
                  >
                    {cell.value >= 0 ? "+" : ""}
                    {cell.value}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
