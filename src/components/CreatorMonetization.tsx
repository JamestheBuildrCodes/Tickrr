import Reveal from "@/components/Reveal";
import { Coins, Mic, ChatBubbles } from "@/components/icons";

const streams = [
  { icon: Coins, title: "Paid subscriptions", desc: "Charge for premium signals, analysis and private rooms. You set the price." },
  { icon: ChatBubbles, title: "Cohorts & mentorship", desc: "Run paid group rooms with admin tools, transcripts and member analytics." },
  { icon: Mic, title: "Tipping & Spaces", desc: "Earn live with super-chats and tips during audio Spaces and trade reviews." },
];

export default function CreatorMonetization() {
  return (
    <section className="py-24">
      <div className="th-container">
        <Reveal>
          <div className="th-card relative overflow-hidden p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 w-72 h-72 rounded-full bg-[var(--th-accent)]/15 blur-[80px]" />
            <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
              <div>
                <span className="th-chip">Creator monetization</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
                  Turn your edge into <span className="th-gradient-text">income</span>
                </h2>
                <p className="mt-4 text-[var(--th-muted)] text-lg max-w-md">
                  Notable contributors and founders earn badges, reach and revenue. Build an audience
                  on verified results — and get paid for it.
                </p>
                <a href="#waitlist" className="btn-primary mt-6">Become a creator</a>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {streams.map((s, i) => (
                  <Reveal key={s.title} delay={i * 90}>
                    <div className="th-card th-card-hover h-full p-5">
                      <span className="grid place-items-center w-10 h-10 rounded-lg bg-[var(--th-accent)]/15 text-[var(--th-accent)] hover-rotate">
                        <s.icon width={20} height={20} />
                      </span>
                      <h3 className="mt-4 text-sm font-semibold">{s.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-[var(--th-muted)]">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
