import axios from "axios";
import { API_BASE_URL } from "../../utils/mock/mockData";
import { FALLBACK_CAROUSEL_CARDS } from "../../utils/mock/fallbackDashboard";
import { useEffect, useState } from "react";
import { FinanceCardLoader } from "../common/Loaders/Loader";

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
		className={`relative min-w-[300px] overflow-hidden rounded-2xl bg-gradient-to-br p-6 text-white shadow-lg ring-1 ring-white/10 ${gradientFrom} ${gradientTo}`}
	>
		<div className="flex h-full flex-col justify-between">
			<div className="space-y-2">
				<p className="text-sm font-medium text-white/75">Balance</p>
				<p className="text-2xl font-bold tabular-nums tracking-tight">{balance}</p>
			</div>
			<div className="space-y-2 pt-4">
				<p className="text-sm font-medium text-white/75">Card holder</p>
				<p className="font-semibold">{cardHolder}</p>
				<p className="font-mono text-sm tracking-wider text-white/90">{cardNumber}</p>
			</div>
		</div>
	</div>
);

export const CardCarousel = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [cards, setCards] = useState<CreditCardProps[]>([]);

	useEffect(() => {
		const applyFallback = () => setCards(FALLBACK_CAROUSEL_CARDS);

		if (!API_BASE_URL) {
			applyFallback();
			setIsLoading(false);
			return;
		}

		axios
			.get(API_BASE_URL + "/api/getCards")
			.then((res) => {
				if (res.status === 200 && res.data?.body?.cards?.length) {
					setCards(res.data.body.cards);
				} else {
					applyFallback();
				}
			})
			.catch(applyFallback)
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className="rounded-xl">
			<div className="flex items-center justify-between pb-5">
				<h2 className="text-lg font-semibold text-[#343c6a]">My cards</h2>
				<button
					type="button"
					className="rounded-lg px-3 py-1.5 text-sm font-medium text-[#4070FF] transition-colors hover:bg-indigo-50"
				>
					See all
				</button>
			</div>
			{isLoading ? (
				<div className="scrollbar flex space-x-4 overflow-x-auto pb-1">
					<FinanceCardLoader variant="blue" />
					<FinanceCardLoader variant="purple" />
				</div>
			) : (
				<div className="scrollbar flex space-x-4 overflow-x-auto pb-1">
					{cards.map((card, index) => (
						<CreditCard key={`${card.cardNumber}-${index}`} {...card} />
					))}
				</div>
			)}
		</div>
	);
};
