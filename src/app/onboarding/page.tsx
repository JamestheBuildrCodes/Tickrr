"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check } from "@/components/icons";
import Link from "next/link";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    country: "",
    timezone: "",
    tradingExperience: "",
    markets: [] as string[],
    tradingStyle: "",
    strategies: [] as string[],
    goals: [] as string[],
  });
  const router = useRouter();

  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit onboarding
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--th-bg)] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-[var(--th-muted)]">
              Step {currentStep} of {totalSteps}
            </span>
            <Link href="/" className="text-sm text-[var(--th-primary)] hover:underline">
              Skip for now
            </Link>
          </div>
          <div className="h-2 bg-[var(--th-surface)] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--th-primary)] to-[var(--th-primary-2)] transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="th-card p-8 backdrop-blur-xl border border-white/10">
          {currentStep === 1 && (
            <PersonalInfoStep
              data={formData}
              onChange={setFormData}
              onNext={handleNext}
            />
          )}
          {currentStep === 2 && (
            <MarketSelectionStep
              data={formData}
              onChange={setFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {currentStep === 3 && (
            <TradingStyleStep
              data={formData}
              onChange={setFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {currentStep === 4 && (
            <GoalsStep
              data={formData}
              onChange={setFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {currentStep === 5 && (
            <SuccessStep
              username={formData.username}
              onComplete={() => router.push("/dashboard")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function PersonalInfoStep({
  data,
  onChange,
  onNext,
}: {
  data: any;
  onChange: (data: any) => void;
  onNext: () => void;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!data.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!data.username.trim()) newErrors.username = "Username is required";
    if (!data.country) newErrors.country = "Country is required";
    if (!data.tradingExperience) newErrors.tradingExperience = "Trading experience is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[var(--th-text)] mb-2">
          About You
        </h2>
        <p className="text-[var(--th-muted)]">
          Tell us a bit about yourself to personalize your experience.
        </p>
      </div>

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-[var(--th-text)] mb-2">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          value={data.fullName}
          onChange={(e) => onChange({ ...data, fullName: e.target.value })}
          placeholder="John Doe"
          className="w-full rounded-xl border border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-[var(--th-text)] placeholder:text-[var(--th-faint)] outline-none transition-colors focus:border-[var(--th-primary)]"
        />
        {errors.fullName && <p className="text-sm text-[var(--th-danger)] mt-1">{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="username" className="block text-sm font-medium text-[var(--th-text)] mb-2">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={data.username}
          onChange={(e) => onChange({ ...data, username: e.target.value })}
          placeholder="johndoe"
          className="w-full rounded-xl border border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-[var(--th-text)] placeholder:text-[var(--th-faint)] outline-none transition-colors focus:border-[var(--th-primary)]"
        />
        {errors.username && <p className="text-sm text-[var(--th-danger)] mt-1">{errors.username}</p>}
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-[var(--th-text)] mb-2">
          Country
        </label>
        <select
          id="country"
          value={data.country}
          onChange={(e) => onChange({ ...data, country: e.target.value })}
          className="w-full rounded-xl border border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-[var(--th-text)] outline-none transition-colors focus:border-[var(--th-primary)]"
        >
          <option value="">Select your country</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="AU">Australia</option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
          <option value="JP">Japan</option>
          <option value="SG">Singapore</option>
          <option value="AE">United Arab Emirates</option>
          <option value="NG">Nigeria</option>
          <option value="ZA">South Africa</option>
          <option value="BR">Brazil</option>
          <option value="IN">India</option>
        </select>
        {errors.country && <p className="text-sm text-[var(--th-danger)] mt-1">{errors.country}</p>}
      </div>

      <div>
        <label htmlFor="tradingExperience" className="block text-sm font-medium text-[var(--th-text)] mb-2">
          Trading Experience
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: "beginner", label: "Beginner" },
            { value: "intermediate", label: "Intermediate" },
            { value: "advanced", label: "Advanced" },
            { value: "professional", label: "Professional" },
          ].map((exp) => (
            <button
              key={exp.value}
              type="button"
              onClick={() => onChange({ ...data, tradingExperience: exp.value })}
              className={`p-4 rounded-xl border transition-all ${
                data.tradingExperience === exp.value
                  ? "border-[var(--th-primary)] bg-[var(--th-primary)]/10"
                  : "border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] hover:border-[var(--th-primary)]/50"
              }`}
            >
              <span className="text-sm font-medium text-[var(--th-text)]">{exp.label}</span>
            </button>
          ))}
        </div>
        {errors.tradingExperience && <p className="text-sm text-[var(--th-danger)] mt-1">{errors.tradingExperience}</p>}
      </div>

      <button
        type="submit"
        className="btn-primary w-full justify-center flex items-center gap-2"
      >
        Continue
        <ArrowRight width={18} height={18} />
      </button>
    </form>
  );
}

function MarketSelectionStep({
  data,
  onChange,
  onNext,
  onBack,
}: {
  data: any;
  onChange: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const markets = [
    { id: "forex", name: "Forex", icon: "📊" },
    { id: "crypto", name: "Crypto", icon: "₿" },
    { id: "stocks", name: "Stocks", icon: "📈" },
    { id: "futures", name: "Futures", icon: "🔮" },
    { id: "options", name: "Options", icon: "⚡" },
    { id: "indices", name: "Indices", icon: "📉" },
    { id: "commodities", name: "Commodities", icon: "🌾" },
    { id: "synthetics", name: "Synthetics", icon: "🎯" },
  ];

  const toggleMarket = (marketId: string) => {
    const newMarkets = data.markets.includes(marketId)
      ? data.markets.filter((m: string) => m !== marketId)
      : [...data.markets, marketId];
    onChange({ ...data, markets: newMarkets });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[var(--th-text)] mb-2">
          Your Markets
        </h2>
        <p className="text-[var(--th-muted)]">
          Select the markets you trade. Choose at least one.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {markets.map((market) => (
          <button
            key={market.id}
            type="button"
            onClick={() => toggleMarket(market.id)}
            className={`p-4 rounded-xl border transition-all ${
              data.markets.includes(market.id)
                ? "border-[var(--th-primary)] bg-[var(--th-primary)]/10"
                : "border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] hover:border-[var(--th-primary)]/50"
            }`}
          >
            <div className="text-2xl mb-2">{market.icon}</div>
            <span className="text-sm font-medium text-[var(--th-text)]">{market.name}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="btn-ghost flex-1"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={data.markets.length === 0}
          className="btn-primary flex-1 justify-center flex items-center gap-2 disabled:opacity-50"
        >
          Continue
          <ArrowRight width={18} height={18} />
        </button>
      </div>
    </div>
  );
}

function TradingStyleStep({
  data,
  onChange,
  onNext,
  onBack,
}: {
  data: any;
  onChange: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const styles = [
    { value: "scalper", label: "Scalper" },
    { value: "day-trader", label: "Day Trader" },
    { value: "swing-trader", label: "Swing Trader" },
    { value: "position-trader", label: "Position Trader" },
    { value: "algorithmic", label: "Algorithmic Trader" },
    { value: "quant", label: "Quant Trader" },
    { value: "investor", label: "Investor" },
  ];

  const strategies = [
    { value: "ict", label: "ICT / SMC", category: "Smart Money" },
    { value: "price-action", label: "Price Action", category: "Price Action" },
    { value: "supply-demand", label: "Supply and Demand", category: "Price Action" },
    { value: "wyckoff", label: "Wyckoff", category: "Classic" },
    { value: "elliott-wave", label: "Elliott Wave", category: "Classic" },
    { value: "harmonics", label: "Harmonics", category: "Pattern" },
    { value: "volume-profile", label: "Volume Profile", category: "Volume" },
    { value: "trend-following", label: "Trend Following", category: "Trend" },
    { value: "mean-reversion", label: "Mean Reversion", category: "Statistical" },
  ];

  const toggleStrategy = (strategyId: string) => {
    const newStrategies = data.strategies.includes(strategyId)
      ? data.strategies.filter((s: string) => s !== strategyId)
      : [...data.strategies, strategyId];
    onChange({ ...data, strategies: newStrategies });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[var(--th-text)] mb-2">
          Trading Style
        </h2>
        <p className="text-[var(--th-muted)]">
          How do you approach the markets?
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--th-text)] mb-3">
          Select your primary trading style
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {styles.map((style) => (
            <button
              key={style.value}
              type="button"
              onClick={() => onChange({ ...data, tradingStyle: style.value })}
              className={`p-4 rounded-xl border transition-all ${
                data.tradingStyle === style.value
                  ? "border-[var(--th-primary)] bg-[var(--th-primary)]/10"
                  : "border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] hover:border-[var(--th-primary)]/50"
              }`}
            >
              <span className="text-sm font-medium text-[var(--th-text)]">{style.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--th-text)] mb-3">
          Select your strategies (optional)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {strategies.map((strategy) => (
            <button
              key={strategy.value}
              type="button"
              onClick={() => toggleStrategy(strategy.value)}
              className={`p-4 rounded-xl border transition-all ${
                data.strategies.includes(strategy.value)
                  ? "border-[var(--th-primary)] bg-[var(--th-primary)]/10"
                  : "border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] hover:border-[var(--th-primary)]/50"
              }`}
            >
              <span className="text-xs text-[var(--th-faint)] mb-1">{strategy.category}</span>
              <span className="text-sm font-medium text-[var(--th-text)]">{strategy.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="btn-ghost flex-1"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="btn-primary flex-1 justify-center flex items-center gap-2"
        >
          Continue
          <ArrowRight width={18} height={18} />
        </button>
      </div>
    </div>
  );
}

function GoalsStep({
  data,
  onChange,
  onNext,
  onBack,
}: {
  data: any;
  onChange: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const goals = [
    { id: "learn", label: "Learn Trading", icon: "📚" },
    { id: "mentors", label: "Find Mentors", icon: "👨‍🏫" },
    { id: "network", label: "Build Network", icon: "🤝" },
    { id: "share", label: "Share Analysis", icon: "📊" },
    { id: "sell-signals", label: "Sell Signals", icon: "💰" },
    { id: "find-signals", label: "Find Signals", icon: "🎯" },
    { id: "verified", label: "Become Verified Trader", icon: "✅" },
    { id: "monetize", label: "Monetize Audience", icon: "💎" },
    { id: "full-time", label: "Trade Full Time", icon: "🚀" },
  ];

  const toggleGoal = (goalId: string) => {
    const newGoals = data.goals.includes(goalId)
      ? data.goals.filter((g: string) => g !== goalId)
      : [...data.goals, goalId];
    onChange({ ...data, goals: newGoals });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[var(--th-text)] mb-2">
          Your Goals
        </h2>
        <p className="text-[var(--th-muted)]">
          What do you want to achieve on Tickrr?
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {goals.map((goal) => (
          <button
            key={goal.id}
            type="button"
            onClick={() => toggleGoal(goal.id)}
            className={`p-4 rounded-xl border transition-all ${
              data.goals.includes(goal.id)
                ? "border-[var(--th-primary)] bg-[var(--th-primary)]/10"
                : "border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] hover:border-[var(--th-primary)]/50"
            }`}
          >
            <div className="text-2xl mb-2">{goal.icon}</div>
            <span className="text-sm font-medium text-[var(--th-text)]">{goal.label}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="btn-ghost flex-1"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="btn-primary flex-1 justify-center flex items-center gap-2"
        >
          Complete Setup
          <ArrowRight width={18} height={18} />
        </button>
      </div>
    </div>
  );
}

function SuccessStep({
  username,
  onComplete,
}: {
  username: string;
  onComplete: () => void;
}) {
  return (
    <div className="text-center space-y-6">
      <div className="grid place-items-center w-20 h-20 rounded-full bg-gradient-to-br from-[var(--th-primary)] to-[var(--th-primary-2)] mx-auto">
        <Check width={40} height={40} className="text-white" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-[var(--th-text)] mb-2">
          Welcome to Tickrr, {username}!
        </h2>
        <p className="text-[var(--th-muted)]">
          Your account is all set up. You're ready to start trading with the community.
        </p>
      </div>
      <button
        onClick={onComplete}
        className="btn-primary w-full justify-center flex items-center gap-2"
      >
        Go to Dashboard
        <ArrowRight width={18} height={18} />
      </button>
    </div>
  );
}
