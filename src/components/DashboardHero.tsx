import {
	CalendarDays,
	PiggyBank,
	Sparkles,
	TrendingDown,
	TrendingUp,
	Wallet,
} from "lucide-react";

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
			note: "Across linked accounts",
		},
		{
			label: "Spending",
			value: "$3,420.00",
			change: "−6% vs prior month",
			up: false,
			icon: PiggyBank,
			note: "This month",
		},
		{
			label: "Investments",
			value: "$18,200.00",
			change: "+0.8%",
			up: true,
			icon: Sparkles,
			note: "Brokerage & funds",
		},
	] as const;

	return (
		<section className="mb-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-[#0f1419] via-[#1a2230] to-[#1e2a3d] p-6 text-white shadow-2xl shadow-slate-900/15 ring-1 ring-white/5">
			<div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
				<div className="max-w-xl space-y-2">
					<p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-200/90">
						Overview
					</p>
					<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
						{greeting}
					</h1>
					<p className="flex items-center gap-2 text-sm text-slate-300">
						<CalendarDays className="h-4 w-4 shrink-0 text-indigo-300/90" />
						{dateLabel}
					</p>
					<p className="text-sm leading-relaxed text-slate-400">
						Cash, cards, and cashflow in one calm surface—built for clarity at a glance.
					</p>
				</div>
			</div>

			<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
				{tiles.map((t) => {
					const Icon = t.icon;
					return (
						<div
							key={t.label}
							className="rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md transition duration-200 hover:border-white/15 hover:bg-white/[0.09]"
						>
							<div className="flex items-start justify-between gap-2">
								<div>
									<p className="text-xs font-medium text-slate-400">{t.label}</p>
									<p className="mt-1 text-xl font-semibold tabular-nums tracking-tight text-white">
										{t.value}
									</p>
									<p className="mt-0.5 text-xs text-slate-500">{t.note}</p>
								</div>
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-100">
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
