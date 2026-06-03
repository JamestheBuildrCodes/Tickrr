import { HiveLogo } from "@/components/icons";

const groups = [
  {
    title: "Product",
    links: ["Features", "Rankings", "Sentiment", "Pricing", "Copy Trading"],
  },
  {
    title: "Markets",
    links: ["Forex", "Crypto", "Synthetics", "Stocks"],
  },
  {
    title: "Company",
    links: ["About", "Creators", "Careers", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Risk Disclosure", "Cookies"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--th-border)] bg-[rgba(7,11,20,0.6)]">
      <div className="th-container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-semibold">
              <span className="grid place-items-center w-9 h-9 rounded-xl glow-ring text-[var(--th-primary)]">
                <HiveLogo width={22} height={22} />
              </span>
              <span className="text-lg">Trade<span className="th-gradient-text">Hive</span></span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-[var(--th-muted)]">
              The social trading platform where verified traders learn, talk, and trade together.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-semibold text-[var(--th-text)]">{g.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#waitlist" className="text-sm text-[var(--th-muted)] hover:text-[var(--th-primary)] transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="th-divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--th-faint)]">
            © {new Date().getFullYear()} TradeHive. All rights reserved.
          </p>
          <p className="max-w-2xl text-[0.7rem] leading-relaxed text-[var(--th-faint)] sm:text-right">
            Trading involves substantial risk of loss and is not suitable for every investor. TradeHive
            provides social, educational and informational tools only — not investment advice. Past
            performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
