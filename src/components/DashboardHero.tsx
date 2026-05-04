import {
  CalendarDays,
  PiggyBank,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

/**
 * Overview-only hero — presentation polish for the dashboard demo (mock-style KPIs).
 */
export function DashboardHero() {
  const now = new Date();
  const greeting =
    now.getHours() < 12
      ? "Good morning"
      : now.getHours() < 18
        ? "Good afternoon"
        : "Good evening";

  const dateLabel = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const tiles = [
    {
      label: "Total balance",
      value: "$24,180.50",
      change: "+2.4%",
      up: true,
      icon: Wallet,
      note: "Across accounts",
    },
    {
      label: "This month",
      value: "$3,420.00",
      change: "−6% vs last",
      up: false,
      icon: PiggyBank,
      note: "Spending (mock)",
    },
    {
      label: "Investments",
      value: "$18,200.00",
      change: "+0.8%",
      up: true,
      icon: Sparkles,
      note: "Portfolio (demo)",
    },
  ] as const;

  return (
    <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-[#1a1f2c] via-[#232a3b] to-[#2d3a55] p-6 text-white shadow-xl shadow-slate-900/10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/80">
            Fin-Dash · overview
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {greeting} — here’s your snapshot
          </h1>
          <p className="flex items-center gap-2 text-sm text-slate-300">
            <CalendarDays className="h-4 w-4 shrink-0 text-indigo-300" />
            {dateLabel}
          </p>
          <p className="text-sm leading-relaxed text-slate-400">
            A compact financial cockpit: cards, cashflow, and activity in one place. Numbers below
            are stylized demo data to showcase layout and chart craft—wire your API when you ship.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
          Live-style mock · safe for portfolio shots
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {tiles.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.label}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-medium text-slate-400">{t.label}</p>
                  <p className="mt-1 text-xl font-semibold tabular-nums tracking-tight">{t.value}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{t.note}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-200">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
              </div>
              <p
                className={`mt-3 inline-flex items-center gap-1 text-xs font-medium ${
                  t.up ? "text-emerald-300" : "text-amber-200"
                }`}
              >
                {t.up ? (
                  <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.5} />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5" strokeWidth={2.5} />
                )}
                {t.change}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
