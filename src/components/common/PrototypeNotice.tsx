import { FlaskConical } from "lucide-react";

export function PrototypeNotice() {
	return (
		<div
			className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200/90 bg-white/90 px-4 py-2.5 text-center text-[11px] leading-snug text-slate-600 shadow-[0_-4px_24px_-8px_rgba(15,23,42,0.06)] backdrop-blur-md sm:text-xs lg:left-64"
			role="note"
			aria-label="Prototype disclaimer"
		>
			<p className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
				<FlaskConical className="hidden h-3.5 w-3.5 shrink-0 text-indigo-500 sm:inline" aria-hidden />
				<span className="font-semibold text-slate-800">Frontend prototype.</span>
				<span className="text-slate-600">
					Fin Dash is a UI-first demo: most features use simulated or placeholder data; nothing here connects to real
					banks or moves money.
				</span>
			</p>
		</div>
	);
}
