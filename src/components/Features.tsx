import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="th-container">
        <SectionHeading
          eyebrow="One platform"
          title="Everything a modern trader needs,"
          highlight="in one hive"
          subtitle="Social, trading and AI — finally living together instead of scattered across Discord, spreadsheets and ten browser tabs."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <article className="th-card th-card-hover group h-full p-6 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--th-primary)]/20 to-[var(--th-primary-2)]/20 text-[var(--th-primary)] hover-rotate group-hover:glow-ring transition-all duration-300">
                    <f.icon width={28} height={28} />
                  </span>
                  {f.tag && (
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--th-faint)] bg-white/5 px-2 py-1 rounded-full">
                      {f.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--th-muted)]">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
