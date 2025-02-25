interface LinkWithIconProps {
	href: string;
	text: string;
	icon: React.ElementType;
}

export function LinkWithIcon({ href, text, icon: Icon }: LinkWithIconProps) {
	// TODO: Implement disable here?
	return (
		<a
			href={href}
			className="flex duration-75 text-black items-center p-2 rounded-lg hover:bg-black hover:text-white group"
		>
			<div
				className="transition duration-75 text-black group-hover:text-white "
				aria-hidden="true"
			>
				<Icon />
			</div>
			<span className="ms-3 ">{text}</span>
		</a>
	);
}
