import axios from "axios";
import { CreditCard, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../utils/mock/mockData";
import {
	FALLBACK_TRANSACTIONS,
	type DashboardTransaction,
} from "../../utils/mock/fallbackDashboard";
import { CardLoader } from "../common/Loaders/Loader";

export const RecentTransactions = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [transactions, setTransactions] = useState<DashboardTransaction[]>([]);

	useEffect(() => {
		const fallback = () => setTransactions(FALLBACK_TRANSACTIONS);

		if (!API_BASE_URL) {
			fallback();
			setIsLoading(false);
			return;
		}

		axios
			.get(API_BASE_URL + "/api/getTransactions")
			.then((res) => {
				if (res.status === 200 && res.data?.body?.transactions?.length) {
					setTransactions(res.data.body.transactions);
				} else {
					fallback();
				}
			})
			.catch(fallback)
			.finally(() => setIsLoading(false));
	}, []);

	const getIcon = (type: DashboardTransaction["type"]) => {
		switch (type) {
			case "card":
				return <CreditCard className="h-5 w-5 text-gray-600" />;
			case "paypal":
				return <DollarSign className="h-5 w-5 text-gray-600" />;
			case "transfer":
				return <DollarSign className="h-5 w-5 text-gray-600" />;
		}
	};

	const getIconBackgroundColor = (type: DashboardTransaction["type"]) => {
		switch (type) {
			case "card":
				return "bg-amber-50";
			case "paypal":
				return "bg-blue-50";
			case "transfer":
				return "bg-emerald-50";
		}
	};

	return (
		<>
			<h2 className="mb-4 text-lg font-semibold text-[#343c6a]">Recent transactions</h2>
			{isLoading ? (
				<div className="scrollbar max-h-[216px] space-y-4 overflow-y-auto pr-2">
					<CardLoader variant="purple" text="Loading..." />
				</div>
			) : (
				<div className="scrollbar max-h-[216px] space-y-3 overflow-y-auto pr-2">
					{transactions.map((transaction) => (
						<div
							key={transaction.id}
							className="group flex items-center justify-between rounded-xl p-2 transition-colors duration-200 hover:bg-gray-50"
						>
							<div className="flex items-center space-x-4">
								<div
									className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:scale-105 ${getIconBackgroundColor(
										transaction.type,
									)}`}
								>
									{getIcon(transaction.type)}
								</div>
								<div className="flex flex-col">
									<span className="text-sm font-medium text-gray-900">{transaction.description}</span>
									<span className="text-xs text-gray-500">{transaction.date}</span>
								</div>
							</div>
							<span
								className={`text-sm font-medium tabular-nums ${
									transaction.amount < 0 ? "text-red-500" : "text-emerald-600"
								}`}
							>
								{transaction.amount < 0 ? "−" : "+"}$
								{Math.abs(transaction.amount).toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</span>
						</div>
					))}
				</div>
			)}
		</>
	);
};
