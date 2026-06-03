import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tradehive.app"),
  title: "TradeHive — Where traders learn, talk, and trade together",
  description:
    "TradeHive is the social trading platform with verified track records, global rankings, copy trading, and an AI co-pilot that reads your charts. Forex, Crypto, Synthetics & Stocks.",
  keywords: [
    "social trading",
    "copy trading",
    "trading community",
    "trade journal",
    "forex",
    "crypto",
    "trading signals",
    "TradeHive",
  ],
  openGraph: {
    title: "TradeHive — The social network for serious traders",
    description:
      "Verified track records. Global rankings. Copy trading. AI chart analysis. Join the hive.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <div className="th-page-bg" aria-hidden />
        <div className="th-grid-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
