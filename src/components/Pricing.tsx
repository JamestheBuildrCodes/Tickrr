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
          subtitle="The community is free forever. Pay only when you want AI, copy trading and pro analytics. Save 2 months on annual billing."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <article
                className={`th-card th-card-hover relative h-full p-6 flex flex-col backdrop-blur-xl border ${
                  plan.featured ? "border-[var(--th-primary)]/50 glow-ring" : "border-white/10"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 th-chip anim-pulse-glow bg-gradient-to-r from-[var(--th-primary)] to-[var(--th-primary-2)]">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-[var(--th-muted)] min-h-[48px]">{plan.blurb}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-5xl font-bold th-gradient-text">{plan.price}</span>
                  <span className="text-sm text-[var(--th-faint)] mb-2">{plan.period}</span>
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--th-muted)]">
                      <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-full bg-gradient-to-br from-[var(--th-primary)]/20 to-[var(--th-primary-2)]/20 text-[var(--th-primary)] shrink-0">
                        <Check width={12} height={12} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/signup"
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
            Plus creator subscriptions, marketplace and broker partnerships — more ways to earn on Tickrr.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
