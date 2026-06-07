import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Quote } from "@/components/icons";

export const testimonials = [
  {
    name: "Marcus Chen",
    handle: "@marcus_fx",
    role: "Forex Trader",
    content: "Tickrr changed how I approach trading. The verified track records mean I can actually trust who I'm copying. My win rate jumped from 45% to 68% in just 3 months.",
    avatar: "MC",
    badge: "Verified",
  },
  {
    name: "Sarah Williams",
    handle: "@sarah_crypto",
    role: "Crypto Investor",
    content: "The AI co-pilot is incredible. It catches patterns I miss and helps me journal my trades properly. The community sentiment heatmap alone is worth the subscription.",
    avatar: "SW",
    badge: "Pro",
  },
  {
    name: "James Rodriguez",
    handle: "@james_swing",
    role: "Swing Trader",
    content: "Finally, a platform that combines social, analytics, and actual trading tools. No more jumping between Discord, TradingView, and spreadsheets. Everything in one place.",
    avatar: "JR",
    badge: "Elite",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="th-container">
        <SectionHeading
          eyebrow="Social Proof"
          title="Trusted by thousands"
          highlight="of serious traders"
          subtitle="See what our community has to say about their experience on Tickrr."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 100}>
              <article className="th-card th-card-hover p-6 backdrop-blur-xl border border-white/10 relative">
                <div className="absolute top-6 right-6 text-[var(--th-primary)]/20">
                  <Quote width={32} height={32} />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--th-primary)] to-[var(--th-primary-2)] flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--th-text)]">{testimonial.name}</p>
                    <p className="text-sm text-[var(--th-faint)]">{testimonial.handle}</p>
                  </div>
                </div>

                <p className="text-[var(--th-muted)] leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--th-faint)]">{testimonial.role}</span>
                  <span className="text-xs font-semibold text-[var(--th-primary)] bg-[var(--th-primary)]/10 px-2 py-1 rounded-full">
                    {testimonial.badge}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-12 text-center">
            <p className="text-sm text-[var(--th-faint)]">
              Join 62,000+ traders already on Tickrr
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
