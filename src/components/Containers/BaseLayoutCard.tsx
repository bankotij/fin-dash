import  { ReactNode } from "react";

interface BaseLayoutCardProps {
	children: ReactNode;
	className?: string;
}

export function BaseLayoutCard({
	children,
	className = "",
}: BaseLayoutCardProps) {
	const baseStyles = "rounded-xl bg-white p-6 h-full shadow-sm";
	const combinedClasses = `${baseStyles} ${className}`.trim();

	return <div className={combinedClasses}>{children}</div>;
}
