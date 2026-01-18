import { useState } from "react";
import { Building2, CreditCard, PiggyBank, Plus, MoreVertical, TrendingUp, TrendingDown } from "lucide-react";

interface Account {
	id: string;
	name: string;
	type: "checking" | "savings" | "credit";
	balance: number;
	accountNumber: string;
	institution: string;
	trend: number;
}

const mockAccounts: Account[] = [
	{
		id: "1",
		name: "Main Checking",
		type: "checking",
		balance: 12450.50,
		accountNumber: "****4521",
		institution: "Chase Bank",
		trend: 5.2,
	},
	{
		id: "2",
		name: "Emergency Fund",
		type: "savings",
		balance: 25000.00,
		accountNumber: "****7832",
		institution: "Wells Fargo",
		trend: 2.1,
	},
	{
		id: "3",
		name: "Travel Savings",
		type: "savings",
		balance: 4320.75,
		accountNumber: "****1234",
		institution: "Ally Bank",
		trend: 8.5,
	},
	{
		id: "4",
		name: "Credit Card",
		type: "credit",
		balance: -2150.00,
		accountNumber: "****9876",
		institution: "American Express",
		trend: -12.3,
	},
];

const Accounts = () => {
	const [accounts] = useState<Account[]>(mockAccounts);

	const totalAssets = accounts.filter((a) => a.balance > 0).reduce((sum, a) => sum + a.balance, 0);
	const totalLiabilities = accounts.filter((a) => a.balance < 0).reduce((sum, a) => sum + Math.abs(a.balance), 0);
	const netWorth = totalAssets - totalLiabilities;

	const getIcon = (type: Account["type"]) => {
		switch (type) {
			case "checking":
				return <Building2 className="w-5 h-5" />;
			case "savings":
				return <PiggyBank className="w-5 h-5" />;
			case "credit":
				return <CreditCard className="w-5 h-5" />;
		}
	};

	const getIconBg = (type: Account["type"]) => {
		switch (type) {
			case "checking":
				return "bg-blue-100 text-blue-600";
			case "savings":
				return "bg-emerald-100 text-emerald-600";
			case "credit":
				return "bg-purple-100 text-purple-600";
		}
	};

	return (
		<div className="p-6 lg:ml-64">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
				<div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
					<p className="text-blue-100 text-sm">Net Worth</p>
					<p className="text-3xl font-bold mt-1">${netWorth.toLocaleString()}</p>
					<div className="flex items-center gap-1 mt-2 text-blue-200 text-sm">
						<TrendingUp className="w-4 h-4" />
						<span>+4.5% this month</span>
					</div>
				</div>
				<div className="bg-white rounded-xl p-6 shadow-sm">
					<p className="text-gray-500 text-sm">Total Assets</p>
					<p className="text-2xl font-bold text-gray-900 mt-1">${totalAssets.toLocaleString()}</p>
					<p className="text-sm text-emerald-600 mt-2">Across {accounts.filter((a) => a.balance > 0).length} accounts</p>
				</div>
				<div className="bg-white rounded-xl p-6 shadow-sm">
					<p className="text-gray-500 text-sm">Total Liabilities</p>
					<p className="text-2xl font-bold text-gray-900 mt-1">${totalLiabilities.toLocaleString()}</p>
					<p className="text-sm text-red-600 mt-2">{accounts.filter((a) => a.balance < 0).length} credit account</p>
				</div>
			</div>

			<div className="bg-white rounded-xl shadow-sm">
				<div className="p-6 border-b border-gray-100 flex justify-between items-center">
					<h2 className="text-lg font-semibold">Your Accounts</h2>
					<button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
						<Plus className="w-4 h-4" />
						Add Account
					</button>
				</div>

				<div className="divide-y divide-gray-100">
					{accounts.map((account) => (
						<div key={account.id} className="p-4 hover:bg-gray-50 transition-colors">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconBg(account.type)}`}>
										{getIcon(account.type)}
									</div>
									<div>
										<p className="font-medium text-gray-900">{account.name}</p>
										<p className="text-sm text-gray-500">{account.institution} • {account.accountNumber}</p>
									</div>
								</div>
								<div className="flex items-center gap-6">
									<div className="text-right">
										<p className={`font-semibold ${account.balance < 0 ? "text-red-600" : "text-gray-900"}`}>
											{account.balance < 0 ? "-" : ""}${Math.abs(account.balance).toLocaleString()}
										</p>
										<div className={`flex items-center justify-end gap-1 text-sm ${account.trend > 0 ? "text-emerald-600" : "text-red-600"}`}>
											{account.trend > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
											<span>{Math.abs(account.trend)}%</span>
										</div>
									</div>
									<button className="p-2 hover:bg-gray-100 rounded-lg">
										<MoreVertical className="w-5 h-5 text-gray-400" />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Accounts;
