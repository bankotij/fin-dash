import axios from "axios";
import { API_BASE_URL } from "../../utils/mock/mockData";
import { useEffect, useState } from "react";

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
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [cards, setCards] = useState<CreditCardProps[]>([]);
	useEffect(() => {
		axios.get(API_BASE_URL + "/api/getCards").then((res) => {
			console.log(res);
			if (res.status === 200) {
				setCards(res.data.body.cards);
			} else {
				setIsError(true);
				console.log("Error fetching cards");
			}
			setIsLoading(false);
		});
	}, []);


	if (isError) {
		return <div>Error fetching cards</div>;
	}

	return (
		<div className="rounded-xl">
			<div className="flex items-center justify-between pb-5">
				<h2 className="text-lg font-semibold">My Cards</h2>
				<button className="text-sm font-medium text-primary-600 hover:bg-gray-50 px-3 py-1 rounded-md transition-colors">
					See All
				</button>
			</div>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div className="flex space-x-4 overflow-x-auto scrollbar">
					{cards.map((card, index) => (
						<CreditCard key={index} {...card} />
					))}
				</div>
			)}
		</div>
	);
};
