import Reveal from "@/components/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
}: Props) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className="th-chip">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
          {title} {highlight && <span className="th-gradient-text">{highlight}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className="mt-4 text-[var(--th-muted)] text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
