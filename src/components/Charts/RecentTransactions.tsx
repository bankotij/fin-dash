import axios from "axios";
import { CreditCard, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../utils/mock/mockData";
import { CardLoader } from "../common/Loaders/Loader";

interface Transaction {
	id: string;
	description: string;
	date: string;
	amount: number;
	type: "card" | "paypal" | "transfer";
}

export const RecentTransactions = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		axios.get(API_BASE_URL + "/api/getTransactions").then((res) => {
			console.log(res);
			if (res.status === 200) {
				setTransactions(res.data.body.transactions);
			} else {
				setIsError(true);
				console.log("Error fetching cards");
			}
			setIsLoading(false);
		});
	}, []);

	const getIcon = (type: Transaction["type"]) => {
		switch (type) {
			case "card":
				return <CreditCard className="w-5 h-5 text-gray-600" />;
			case "paypal":
				return <DollarSign className="w-5 h-5 text-gray-600" />;
			case "transfer":
				return <DollarSign className="w-5 h-5 text-gray-600" />;
		}
	};

	const getIconBackgroundColor = (type: Transaction["type"]) => {
		switch (type) {
			case "card":
				return "bg-amber-50";
			case "paypal":
				return "bg-blue-50";
			case "transfer":
				return "bg-emerald-50";
		}
	};

	if (isError) {
		return <div>Error fetching cards</div>;
	}

	return (
		<>
			<h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
			{isLoading ? (
				<div className="space-y-4 max-h-[216px] overflow-y-auto pr-2 scrollbar">
					<CardLoader variant="purple" text="Loading..." />
				</div>
			) : (
				<div className="space-y-4 max-h-[216px] overflow-y-auto pr-2 scrollbar">
					{transactions.map((transaction) => (
						<div
							key={transaction.id}
							className="flex items-center justify-between group transition-all duration-200 hover:bg-gray-50 p-2 rounded-lg"
						>
							<div className="flex items-center space-x-4">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 ${getIconBackgroundColor(
										transaction.type
									)}`}
								>
									{getIcon(transaction.type)}
								</div>
								<div className="flex flex-col">
									<span className="text-sm font-medium text-gray-900">
										{transaction.description}
									</span>
									<span className="text-xs text-gray-500">
										{transaction.date}
									</span>
								</div>
							</div>
							<span
								className={`font-medium text-sm ${
									transaction.amount < 0
										? "text-red-500"
										: "text-emerald-500"
								}`}
							>
								{transaction.amount < 0 ? "-" : "+"}$
								{Math.abs(transaction.amount).toLocaleString()}
							</span>
						</div>
					))}
				</div>
			)}
		</>
	);
};
