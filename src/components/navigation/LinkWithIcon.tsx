interface LinkWithIconProps {
	href: string;
	text: string;
	icon: React.ElementType;
	isActive: boolean;
	isDisabled: boolean;
}

export function LinkWithIcon({ href, text, icon: Icon, isActive, isDisabled }: LinkWithIconProps) {
	return (
		<a
			href={`${isDisabled || isActive ? '#' : href}`}
			className={`${isActive ? 'bg-black text-white' : ''} ${isDisabled ? 'cursor-not-allowed opacity-60' : ''} flex duration-75 text-black items-center p-2 rounded-lg ${!isDisabled && !isActive && 'hover:bg-black hover:text-white'} group relative`}
			aria-disabled={isDisabled || isActive}
			title={isDisabled ? 'Coming Soon' : undefined}
		>
			<div
				className={`${isActive ? 'text-white' : ''} ${isDisabled ? 'opacity-60' : 'transition duration-75 text-black group-hover:text-white'} `}
				aria-hidden="true"
			>
				<Icon />
			</div>
			<span className="ms-3">{text}</span>
			{isDisabled && (
				<span className="ml-auto text-[10px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full font-medium">
					Soon
				</span>
			)}
		</a>
	);
}
