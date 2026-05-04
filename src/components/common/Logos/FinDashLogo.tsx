import { Layers } from "lucide-react";

export function FinDashLogo() {
	return (
		<div className="flex items-center gap-3 px-1 py-2">
			<div
				className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white shadow-lg shadow-indigo-950/25 ring-1 ring-white/10"
				aria-hidden
			>
				<Layers className="h-[22px] w-[22px]" strokeWidth={2} />
			</div>
			<div className="min-w-0">
				<span className="block truncate text-lg font-bold tracking-tight leading-tight text-slate-900">
					Fin Dash
				</span>
			</div>
		</div>
	);
}
