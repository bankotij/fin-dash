interface LoaderProps {
	size?: "sm" | "md" | "lg";
	variant?: "primary" | "secondary" | "minimal" | "blue" | "purple" | "green";
	className?: string;
	text?: string;
	cardStyle?: boolean;
}

const Loader = ({
	size = "md",
	variant = "primary",
	className,
	text,
	cardStyle = false,
}: LoaderProps) => {
	const sizeClasses = {
		sm: "h-4 w-4",
		md: "h-8 w-8",
		lg: "h-12 w-12",
	};

	const variantClasses = {
		primary: "before:border-[#1A1F2C] after:border-[#1A1F2C]/30",
		secondary: "before:border-white after:border-white/30",
		minimal: "before:border-gray-400 after:border-gray-200",
		blue: "before:border-[#1EAEDB] after:border-[#33C3F0]/30",
		purple: "before:border-[#7E69AB] after:border-[#9b87f5]/30",
		green: "before:border-emerald-500 after:border-emerald-500/30",
	};

	const combineClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

	return (
		<div className={combineClasses("flex flex-col items-center justify-center gap-3", cardStyle ? "h-full w-full py-8" : "", className)}>
			<div className={combineClasses("relative animate-spin rounded-full border-transparent", "before:absolute before:inset-0 before:rounded-full before:border-2 before:border-t-transparent", "after:absolute after:inset-0 after:rounded-full after:border-2 after:border-t-transparent", sizeClasses[size], variantClasses[variant])} />
			{text && <p className={combineClasses("text-sm font-medium animate-pulse", variant === "secondary" ? "text-white" : "text-gray-500")}>{text}</p>}
		</div>
	);
};

export const CardLoader = ({ variant = "blue", text = "Loading...", className, ...props }: LoaderProps & { className?: string }) => {
	const combineClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

	const cardBgColors = {
		primary: "bg-white",
		secondary: "bg-[#1A1F2C]",
		minimal: "bg-gray-50",
		blue: "bg-[#D3E4FD]",
		purple: "bg-[#F1F0FB]",
		green: "bg-emerald-100",
	};

	return (
		<div className={combineClasses("rounded-xl shadow-sm w-full h-full min-h-[180px] flex flex-col items-center justify-center p-6", cardBgColors[variant], className)}>
			<Loader size="lg" variant={variant} text={text} cardStyle {...props} />
		</div>
	);
};

export const FinanceCardLoader = ({ variant = "blue", className, ...props }: LoaderProps & { className?: string }) => {
	const combineClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

	const bgColors = {
		primary: "bg-[#1A1F2C]",
		secondary: "bg-white",
		minimal: "bg-gray-200",
		blue: "bg-[#1A1F2C]",
		purple: "bg-[#7E69AB]",
		green: "bg-emerald-500",
	};

	return (
		<div className={combineClasses("rounded-xl overflow-hidden w-full min-h-[170px] flex flex-col", bgColors[variant], className)}>
			<div className="p-4 text-white">
				<div className="h-6 w-20 bg-white/20 rounded-full mb-4 animate-pulse"></div>
				<div className="h-8 w-28 bg-white/20 rounded-lg animate-pulse mb-2"></div>
				<div className="h-4 w-24 bg-white/10 rounded-full animate-pulse"></div>
			</div>
			<div className="mt-auto p-4 pt-2">
				<div className="h-6 w-[90%] bg-white/10 rounded-full animate-pulse"></div>
			</div>
		</div>
	);
};

export const ChartLoader = ({ className, chartType = "bar", ...props }: LoaderProps & { className?: string; chartType?: "bar" | "pie" }) => {
	const combineClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

	return (
		<div className={combineClasses("rounded-xl bg-white shadow-sm w-full h-full min-h-[300px] p-6", className)}>
			<div className="flex justify-between items-center mb-6">
				<div className="h-7 w-40 bg-gray-200 rounded-lg animate-pulse"></div>
				{chartType === "bar" && (
					<div className="flex space-x-2">
						<div className="h-5 w-20 bg-gray-200 rounded-full animate-pulse"></div>
						<div className="h-5 w-20 bg-gray-200 rounded-full animate-pulse delay-150"></div>
					</div>
				)}
			</div>

			{chartType === "bar" ? (
				<div className="flex items-end justify-between h-[200px] gap-2 pt-4">
					{[...Array(7)].map((_, i) => (
						<div key={i} className="flex flex-col items-center gap-2 w-full">
							<div className={`w-full bg-blue-400/70 rounded-t-sm animate-pulse`} style={{ height: `${Math.random() * 70 + 30}%`, animationDelay: `${i * 100}ms` }}></div>
							<div className="h-4 w-8 bg-gray-200 rounded-full animate-pulse mt-2"></div>
						</div>
					))}
				</div>
			) : (
				<div className="flex justify-center items-center h-[200px]">
					<div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-8 border-gray-200 animate-pulse">
						<div className="absolute inset-0 rounded-full overflow-hidden">
							<div className="absolute bg-purple-500/70 w-full h-1/3 animate-pulse"></div>
							<div className="absolute bg-blue-500/70 w-full h-1/3 transform rotate-[120deg] origin-bottom-right animate-pulse delay-100"></div>
							<div className="absolute bg-emerald-500/70 w-full h-1/3 transform rotate-[240deg] origin-bottom-left animate-pulse delay-200"></div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Loader;
