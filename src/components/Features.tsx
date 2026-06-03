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

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <article className="th-card th-card-hover group h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-[var(--th-primary)]/10 text-[var(--th-primary)] hover-rotate group-hover:glow-ring">
                    <f.icon width={24} height={24} />
                  </span>
                  {f.tag && (
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-[var(--th-faint)]">
                      {f.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--th-muted)]">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
