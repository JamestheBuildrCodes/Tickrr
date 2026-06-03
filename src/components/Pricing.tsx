import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { plans } from "@/lib/data";
import { Check, Coins } from "@/components/icons";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="th-container">
        <SectionHeading
          eyebrow="Pricing"
          title="Start free."
          highlight="Scale with your edge."
          subtitle="The community is free forever. Pay only when you want AI, copy trading and pro analytics. Save ~2 months on annual billing."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80} className="h-full">
              <article
                className={`th-card th-card-hover relative h-full p-6 flex flex-col ${
                  plan.featured ? "border-[var(--th-primary)]/50 glow-ring" : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 th-chip anim-pulse-glow">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-[var(--th-muted)] min-h-[40px]">{plan.blurb}</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold th-gradient-text">{plan.price}</span>
                  <span className="text-sm text-[var(--th-faint)] mb-1.5">{plan.period}</span>
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--th-muted)]">
                      <span className="mt-0.5 grid place-items-center w-4 h-4 rounded-full bg-[var(--th-primary)]/20 text-[var(--th-primary)] shrink-0">
                        <Check width={11} height={11} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#waitlist"
                  className={`mt-6 ${plan.featured ? "btn-primary" : "btn-ghost"} w-full justify-center`}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-[var(--th-faint)]">
            <Coins width={16} height={16} className="text-[var(--th-accent)]" />
            Plus creator subscriptions, marketplace and broker partnerships — more ways to earn in the hive.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
