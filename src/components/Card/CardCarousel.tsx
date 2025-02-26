// TODO: Match this as per figma.
interface CreditCardProps {
	balance: string;
	cardHolder: string;
	cardNumber: string;
	gradientFrom: string;
	gradientTo: string;
}

const CreditCard = ({
	balance,
	cardHolder,
	cardNumber,
	gradientFrom,
	gradientTo,
}: CreditCardProps) => (
	<div
		className={`relative min-w-[300px] overflow-hidden rounded-xl bg-gradient-to-br p-6 text-white ${gradientFrom} ${gradientTo}`}
	>
		<div className="flex flex-col justify-between h-full">
			<div className="space-y-2">
				<p className="text-sm font-medium text-white/80">Balance</p>
				<p className="text-2xl font-bold">{balance}</p>
			</div>
			<div className="space-y-2">
				<p className="text-sm font-medium text-white/80">Card Holder</p>
				<p className="font-semibold">{cardHolder}</p>
				<p className="font-mono tracking-wider">{cardNumber}</p>
			</div>
		</div>
	</div>
);

export const CardCarousel = () => {
	const cards = [
		{
			balance: "$5,756",
			cardHolder: "Eddy Cusuma",
			validThru: "12/22",
			cardNumber: "3778 **** **** 1234",
			gradientFrom: "from-gray-500",
			gradientTo: "to-black",
		},
		{
			balance: "$2,345",
			cardHolder: "Eddy Cusuma",
			validThru: "03/25",
			cardNumber: "5421 **** **** 9876",
			gradientFrom: "from-purple-600",
			gradientTo: "to-purple-400",
		},
		{
			balance: "$8,901",
			cardHolder: "Eddy Cusuma",
			validThru: "09/23",
			cardNumber: "6011 **** **** 5432",
			gradientFrom: "from-green-600",
			gradientTo: "to-green-400",
		},
	];

	return (
		<div className="rounded-xl">
			<div className="flex items-center justify-between pb-5">
				<h2 className="text-lg font-semibold">My Cards</h2>
				<button className="text-sm font-medium text-primary-600 hover:bg-gray-50 px-3 py-1 rounded-md transition-colors">
					See All
				</button>
			</div>

			{/* Scrollable Cards Container */}
			<div className="flex space-x-4 overflow-x-auto ">
				{cards.map((card, index) => (
					<CreditCard key={index} {...card} />
				))}
			</div>
		</div>
	);
};
