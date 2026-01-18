import { useState } from "react";
import { TrendingUp, TrendingDown, PieChart, BarChart3, ArrowUpRight, Wallet } from "lucide-react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Investment {
	id: string;
	name: string;
	symbol: string;
	type: "stock" | "etf" | "crypto" | "bond";
	value: number;
	shares: number;
	change: number;
	changePercent: number;
}

const mockInvestments: Investment[] = [
	{ id: "1", name: "Apple Inc.", symbol: "AAPL", type: "stock", value: 15420.50, shares: 85, change: 342.20, changePercent: 2.27 },
	{ id: "2", name: "S&P 500 ETF", symbol: "SPY", type: "etf", value: 28500.00, shares: 60, change: -156.30, changePercent: -0.55 },
	{ id: "3", name: "Bitcoin", symbol: "BTC", type: "crypto", value: 8750.00, shares: 0.21, change: 450.00, changePercent: 5.42 },
	{ id: "4", name: "Tesla Inc.", symbol: "TSLA", type: "stock", value: 12300.00, shares: 50, change: 615.00, changePercent: 5.26 },
	{ id: "5", name: "US Treasury Bond", symbol: "TLT", type: "bond", value: 10000.00, shares: 100, change: 50.00, changePercent: 0.5 },
];

const Investments = () => {
	const [investments] = useState<Investment[]>(mockInvestments);

	const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0);
	const totalChange = investments.reduce((sum, inv) => sum + inv.change, 0);
	const totalChangePercent = (totalChange / (totalValue - totalChange)) * 100;

	const pieData = {
		labels: ["Stocks", "ETFs", "Crypto", "Bonds"],
		datasets: [
			{
				data: [
					investments.filter((i) => i.type === "stock").reduce((sum, i) => sum + i.value, 0),
					investments.filter((i) => i.type === "etf").reduce((sum, i) => sum + i.value, 0),
					investments.filter((i) => i.type === "crypto").reduce((sum, i) => sum + i.value, 0),
					investments.filter((i) => i.type === "bond").reduce((sum, i) => sum + i.value, 0),
				],
				backgroundColor: ["#3B82F6", "#8B5CF6", "#F59E0B", "#10B981"],
				borderWidth: 0,
			},
		],
	};

	const getTypeBadge = (type: Investment["type"]) => {
		const styles = {
			stock: "bg-blue-100 text-blue-700",
			etf: "bg-purple-100 text-purple-700",
			crypto: "bg-amber-100 text-amber-700",
			bond: "bg-emerald-100 text-emerald-700",
		};
		return styles[type];
	};

	return (
		<div className="p-6 lg:ml-64">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
				<div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white">
					<div className="flex items-center gap-2 text-purple-200 text-sm">
						<Wallet className="w-4 h-4" />
						<span>Portfolio Value</span>
					</div>
					<p className="text-3xl font-bold mt-2">${totalValue.toLocaleString()}</p>
					<div className={`flex items-center gap-1 mt-2 text-sm ${totalChange > 0 ? "text-emerald-300" : "text-red-300"}`}>
						{totalChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
						<span>{totalChange > 0 ? "+" : ""}{totalChangePercent.toFixed(2)}% today</span>
					</div>
				</div>
				<div className="bg-white rounded-xl p-6 shadow-sm">
					<div className="flex items-center gap-2 text-gray-500 text-sm">
						<BarChart3 className="w-4 h-4" />
						<span>Today's P&L</span>
					</div>
					<p className={`text-2xl font-bold mt-2 ${totalChange > 0 ? "text-emerald-600" : "text-red-600"}`}>
						{totalChange > 0 ? "+" : ""}${totalChange.toLocaleString()}
					</p>
				</div>
				<div className="bg-white rounded-xl p-6 shadow-sm">
					<div className="flex items-center gap-2 text-gray-500 text-sm">
						<PieChart className="w-4 h-4" />
						<span>Holdings</span>
					</div>
					<p className="text-2xl font-bold mt-2 text-gray-900">{investments.length}</p>
				</div>
				<div className="bg-white rounded-xl p-6 shadow-sm">
					<div className="flex items-center gap-2 text-gray-500 text-sm">
						<ArrowUpRight className="w-4 h-4" />
						<span>Best Performer</span>
					</div>
					<p className="text-2xl font-bold mt-2 text-emerald-600">BTC +5.42%</p>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
					<div className="p-6 border-b border-gray-100">
						<h2 className="text-lg font-semibold">Your Holdings</h2>
					</div>
					<div className="divide-y divide-gray-100">
						{investments.map((inv) => (
							<div key={inv.id} className="p-4 hover:bg-gray-50 transition-colors">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4">
										<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">
											{inv.symbol.charAt(0)}
										</div>
										<div>
											<div className="flex items-center gap-2">
												<p className="font-medium text-gray-900">{inv.name}</p>
												<span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getTypeBadge(inv.type)}`}>
													{inv.type.toUpperCase()}
												</span>
											</div>
											<p className="text-sm text-gray-500">{inv.shares} shares • {inv.symbol}</p>
										</div>
									</div>
									<div className="text-right">
										<p className="font-semibold text-gray-900">${inv.value.toLocaleString()}</p>
										<p className={`text-sm flex items-center justify-end gap-1 ${inv.change > 0 ? "text-emerald-600" : "text-red-600"}`}>
											{inv.change > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
											{inv.change > 0 ? "+" : ""}{inv.changePercent}%
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="bg-white rounded-xl shadow-sm p-6">
					<h2 className="text-lg font-semibold mb-4">Asset Allocation</h2>
					<Pie data={pieData} options={{ plugins: { legend: { position: "bottom" } } }} />
				</div>
			</div>
		</div>
	);
};

export default Investments;
