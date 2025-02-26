
import { CreditCard, DollarSign } from "lucide-react";

interface Transaction {
  id: string;
  description: string;
  date: string;
  amount: number;
  type: "card" | "paypal" | "transfer";
}

export const RecentTransactions = ({ transactions }: { transactions: Transaction[] }) => {
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

  return (
	<>
		<h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
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
				<span className="text-xs text-gray-500">{transaction.date}</span>
				</div>
			</div>
			<span
				className={`font-medium text-sm ${
				transaction.amount < 0 ? "text-red-500" : "text-emerald-500"
				}`}
			>
				{transaction.amount < 0 ? "-" : "+"}$
				{Math.abs(transaction.amount).toLocaleString()}
			</span>
			</div>
		))}
		</div>
	</>
  );
};