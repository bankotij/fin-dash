interface LinkWithIconProps {
	href: string;
	text: string;
	icon: React.ElementType;
	isActive: boolean;
	isDisabled: boolean;
}

export function LinkWithIcon({ href, text, icon: Icon, isActive, isDisabled }: LinkWithIconProps) {
	// TODO: Implement disable here?
	return (
		<a
			href={`${isDisabled || isActive ? '#' : href}`}
			className={`${isActive ? 'bg-black text-white cursor-not-allowed' : ''} ${isDisabled ? 'cursor-not-allowed opacity-50' : ''} flex duration-75 text-black items-center p-2 rounded-lg ${!isDisabled && !isActive && 'hover:bg-black hover:text-white'} group`}
			aria-disabled={isDisabled || isActive}
		>
			<div
				className={`${isActive ? 'text-white' : ''} ${isDisabled ? 'opacity-50' : 'transition duration-75 text-black group-hover:text-white'} `}
				aria-hidden="true"
			>
				<Icon />
			</div>
			<span className="ms-3 ">{text}</span>
		</a>
	);
}
