import type { ComponentType, SVGProps } from "react";
import {
  ShieldCheck,
  Trophy,
  ChatBubbles,
  Mic,
  CopyTrade,
  Robot,
  Journal,
  Grid,
  Clock,
} from "@/components/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type Feature = {
  icon: Icon;
  title: string;
  desc: string;
  tag?: string;
};

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Verified Track Records",
    desc: "Connect your broker or exchange read-only. Your P&L, win-rate and drawdown are verified on-chain of truth — never screenshot claims.",
    tag: "Trust",
  },
  {
    icon: Trophy,
    title: "Global Trader Rankings",
    desc: "Climb the leaderboard on verified performance. Founders and notable contributors earn permanent badges.",
    tag: "Reputation",
  },
  {
    icon: CopyTrade,
    title: "Smart Copy Trading",
    desc: "Mirror the traders you trust with position-sizing controls and risk caps. Trade Delay Protection stops front-running of calls.",
    tag: "Automation",
  },
  {
    icon: Robot,
    title: "AI Chart Co-Pilot",
    desc: "Drop in a chart and the AI annotates structure, suggests trade plans, and reviews your journal for behavioral leaks.",
    tag: "AI",
  },
  {
    icon: ChatBubbles,
    title: "Chats, Spaces & Forums",
    desc: "DMs, group chats, live audio Spaces with real-time transcription, and forums split by asset class and strategy.",
    tag: "Social",
  },
  {
    icon: Journal,
    title: "Auto Trade Journal",
    desc: "Trades import automatically from connected accounts. Tag setups, attach charts, and surface your real edge.",
    tag: "Discipline",
  },
  {
    icon: Grid,
    title: "Community Sentiment Heatmap",
    desc: "See where the hive leans bullish or bearish across Forex, Crypto, Synthetics and Stocks in real time.",
    tag: "Edge",
  },
  {
    icon: Clock,
    title: "Backtesting & Signals",
    desc: "Validate strategies against history, then publish calls with auto-tracked performance scorecards.",
    tag: "Research",
  },
  {
    icon: Mic,
    title: "Live Spaces + Transcripts",
    desc: "Run audio rooms for trade reviews and mentorship. Every session is transcribed and searchable.",
    tag: "Live",
  },
];

export const assetClasses = ["Forex", "Crypto", "Synthetics", "Stocks"] as const;

export const strategies = [
  "Scalping",
  "Swing",
  "ICT / SMC",
  "Price Action",
  "Day Trading",
  "Options",
  "Algo",
  "Position",
  "Mean Reversion",
  "Breakout",
];

export type Trader = {
  rank: number;
  name: string;
  handle: string;
  market: string;
  roi: string;
  win: string;
  followers: string;
  badge?: string;
  trend: number[];
};

export const leaderboard: Trader[] = [
  {
    rank: 1,
    name: "Amara Okoye",
    handle: "@amaraFX",
    market: "Forex",
    roi: "+218%",
    win: "71%",
    followers: "48.2k",
    badge: "Founder",
    trend: [10, 14, 12, 20, 26, 24, 33, 40],
  },
  {
    rank: 2,
    name: "Kai Nakamura",
    handle: "@kai_perps",
    market: "Crypto",
    roi: "+187%",
    win: "64%",
    followers: "39.7k",
    badge: "Verified",
    trend: [8, 9, 16, 14, 22, 30, 28, 36],
  },
  {
    rank: 3,
    name: "Lucia Ferraro",
    handle: "@luciaSMC",
    market: "Synthetics",
    roi: "+154%",
    win: "68%",
    followers: "27.3k",
    badge: "Top Mentor",
    trend: [12, 11, 15, 18, 17, 23, 27, 31],
  },
  {
    rank: 4,
    name: "Diego Santos",
    handle: "@diego_swing",
    market: "Stocks",
    roi: "+131%",
    win: "59%",
    followers: "21.9k",
    trend: [6, 10, 9, 13, 19, 18, 24, 28],
  },
  {
    rank: 5,
    name: "Priya Nair",
    handle: "@priya_scalps",
    market: "Forex",
    roi: "+119%",
    win: "63%",
    followers: "18.4k",
    trend: [9, 12, 11, 16, 15, 21, 23, 26],
  },
];

export type HeatCell = { symbol: string; value: number };

export const heatmap: HeatCell[] = [
  { symbol: "BTC", value: 78 },
  { symbol: "ETH", value: 64 },
  { symbol: "EUR/USD", value: -42 },
  { symbol: "GBP/JPY", value: 31 },
  { symbol: "SOL", value: 71 },
  { symbol: "XAU/USD", value: 55 },
  { symbol: "V75", value: -23 },
  { symbol: "NAS100", value: 48 },
  { symbol: "AAPL", value: 12 },
  { symbol: "TSLA", value: -38 },
  { symbol: "USD/JPY", value: 27 },
  { symbol: "BOOM500", value: 61 },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    blurb: "Perfect for beginners exploring the community.",
    features: [
      "Social feed & public chats",
      "1 connected account",
      "Basic trade journal",
      "Paper trading simulator",
      "Community forums",
      "Delayed leaderboard (24h)",
    ],
    cta: "Get started free",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    blurb: "For active traders seeking competitive advantage.",
    features: [
      "Everything in Starter",
      "Unlimited journal + advanced analytics",
      "Real-time rankings & price alerts",
      "Live sentiment heatmap",
      "AI chart analysis (100 credits/mo)",
      "5 connected accounts",
      "Priority support",
    ],
    cta: "Start Pro trial",
    featured: true,
  },
  {
    name: "Elite",
    price: "$79",
    period: "/mo",
    blurb: "Professional traders & signal providers.",
    features: [
      "Everything in Pro",
      "Smart Copy Trading with risk controls",
      "Backtesting engine with 10yr data",
      "Unlimited AI co-pilot access",
      "Priority Spaces & live scorecards",
      "15 connected accounts",
      "API access (10k calls/mo)",
      "Trading competitions entry",
    ],
    cta: "Go Elite",
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/mo+",
    blurb: "Prop firms, funds & trading communities.",
    features: [
      "Everything in Elite",
      "White-label branded rooms",
      "Advanced admin & moderation suite",
      "Unlimited seats & team management",
      "Custom API integrations",
      "Compliance & audit exports",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact sales",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How are track records verified?",
    a: "You connect your broker (MT4/MT5 via MetaApi) or exchange with read-only API keys. Tickrr computes your P&L, win-rate, expectancy and drawdown directly from trade history — no screenshots, no edits.",
  },
  {
    q: "Is Tickrr a broker? Do you hold my funds?",
    a: "No. Tickrr never holds or custodies funds. We connect to your existing broker or exchange. Copy trading executes through their APIs with risk controls you set.",
  },
  {
    q: "Which markets are supported?",
    a: "Forex, Crypto, Synthetics and Stocks — each with dedicated forums and strategy segments (scalping, swing, ICT/SMC, price action, options and more).",
  },
  {
    q: "How does creator monetization work?",
    a: "Verified creators run paid subscriptions, private rooms and tipping in Spaces. You set your price; Tickrr takes a small platform fee and handles payouts.",
  },
  {
    q: "What is Trade Delay Protection?",
    a: "An anti-front-running layer that controls when and to whom a signal is revealed, so copiers get fair fills and providers' edges aren't instantly arbitraged.",
  },
];
