import { assetClasses, strategies } from "@/lib/data";

const items = [...assetClasses, ...strategies];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <section className="py-10 border-y border-[var(--th-border)] bg-[rgba(11,17,32,0.4)]">
      <p className="th-container text-center text-xs uppercase tracking-[0.2em] text-[var(--th-faint)] mb-6">
        Built for every market · every strategy
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track gap-3">
          {doubled.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="th-chip whitespace-nowrap !text-[var(--th-muted)] !bg-white/[0.03] !border-[var(--th-border)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
