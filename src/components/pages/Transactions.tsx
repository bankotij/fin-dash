import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../utils/mock/mockData";
import { CreditCard, DollarSign, ArrowUpRight, ArrowDownLeft, Filter, Search } from "lucide-react";

interface Transaction {
	id: string;
	description: string;
	date: string;
	amount: number;
	type: "card" | "paypal" | "transfer";
}

const Transactions = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [filter, setFilter] = useState<"all" | "income" | "expense">("all");
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		axios
			.get(API_BASE_URL + "/api/getTransactions")
			.then((res) => {
				if (res.status === 200) {
					setTransactions(res.data.body.transactions);
				}
			})
			.catch(() => {})
			.finally(() => setIsLoading(false));
	}, []);

	const filteredTransactions = transactions.filter((t) => {
		const matchesFilter =
			filter === "all" ||
			(filter === "income" && t.amount > 0) ||
			(filter === "expense" && t.amount < 0);
		const matchesSearch = t.description.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesFilter && matchesSearch;
	});

	const totalIncome = transactions.filter((t) => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
	const totalExpense = transactions.filter((t) => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0);

	const getIcon = (type: Transaction["type"]) => {
		switch (type) {
			case "card":
				return <CreditCard className="w-5 h-5" />;
			case "paypal":
			case "transfer":
				return <DollarSign className="w-5 h-5" />;
		}
	};

	const getIconBg = (type: Transaction["type"]) => {
		switch (type) {
			case "card":
				return "bg-amber-100 text-amber-600";
			case "paypal":
				return "bg-blue-100 text-blue-600";
			case "transfer":
				return "bg-emerald-100 text-emerald-600";
		}
	};

	return (
		<div className="p-6 lg:ml-64">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
				<div className="bg-white rounded-xl p-6 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Balance</p>
							<p className="text-2xl font-bold text-gray-900">
								${(totalIncome - totalExpense).toLocaleString()}
							</p>
						</div>
						<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
							<DollarSign className="w-6 h-6 text-blue-600" />
						</div>
					</div>
				</div>
				<div className="bg-white rounded-xl p-6 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Income</p>
							<p className="text-2xl font-bold text-emerald-600">
								+${totalIncome.toLocaleString()}
							</p>
						</div>
						<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
							<ArrowDownLeft className="w-6 h-6 text-emerald-600" />
						</div>
					</div>
				</div>
				<div className="bg-white rounded-xl p-6 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Expense</p>
							<p className="text-2xl font-bold text-red-600">
								-${totalExpense.toLocaleString()}
							</p>
						</div>
						<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
							<ArrowUpRight className="w-6 h-6 text-red-600" />
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white rounded-xl shadow-sm">
				<div className="p-6 border-b border-gray-100">
					<div className="flex flex-col sm:flex-row gap-4 justify-between">
						<h2 className="text-lg font-semibold">All Transactions</h2>
						<div className="flex gap-3">
							<div className="relative">
								<Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
								<input
									type="text"
									placeholder="Search..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
							<div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
								<button
									onClick={() => setFilter("all")}
									className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
										filter === "all" ? "bg-white shadow-sm" : "text-gray-600"
									}`}
								>
									All
								</button>
								<button
									onClick={() => setFilter("income")}
									className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
										filter === "income" ? "bg-white shadow-sm" : "text-gray-600"
									}`}
								>
									Income
								</button>
								<button
									onClick={() => setFilter("expense")}
									className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
										filter === "expense" ? "bg-white shadow-sm" : "text-gray-600"
									}`}
								>
									Expense
								</button>
							</div>
						</div>
					</div>
				</div>

				{isLoading ? (
					<div className="p-6 space-y-4">
						{[...Array(5)].map((_, i) => (
							<div key={i} className="flex items-center gap-4 animate-pulse">
								<div className="w-12 h-12 bg-gray-200 rounded-full"></div>
								<div className="flex-1">
									<div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
									<div className="h-3 bg-gray-100 rounded w-1/4"></div>
								</div>
								<div className="h-4 bg-gray-200 rounded w-20"></div>
							</div>
						))}
					</div>
				) : (
					<div className="divide-y divide-gray-100">
						{filteredTransactions.map((transaction) => (
							<div
								key={transaction.id}
								className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
							>
								<div className="flex items-center gap-4">
									<div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconBg(transaction.type)}`}>
										{getIcon(transaction.type)}
									</div>
									<div>
										<p className="font-medium text-gray-900">{transaction.description}</p>
										<p className="text-sm text-gray-500">{transaction.date}</p>
									</div>
								</div>
								<span className={`font-semibold ${transaction.amount < 0 ? "text-red-500" : "text-emerald-500"}`}>
									{transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount).toLocaleString()}
								</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Transactions;
