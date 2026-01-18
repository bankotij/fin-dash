import { useState } from "react";
import { Home, Car, GraduationCap, Briefcase, Calculator, TrendingDown, Calendar, DollarSign } from "lucide-react";

interface Loan {
	id: string;
	name: string;
	type: "mortgage" | "auto" | "student" | "personal";
	principal: number;
	remaining: number;
	interestRate: number;
	monthlyPayment: number;
	nextPayment: string;
	term: string;
}

const mockLoans: Loan[] = [
	{
		id: "1",
		name: "Home Mortgage",
		type: "mortgage",
		principal: 350000,
		remaining: 285000,
		interestRate: 6.5,
		monthlyPayment: 2215,
		nextPayment: "Feb 1, 2026",
		term: "30 years",
	},
	{
		id: "2",
		name: "Auto Loan",
		type: "auto",
		principal: 35000,
		remaining: 18500,
		interestRate: 4.9,
		monthlyPayment: 650,
		nextPayment: "Jan 25, 2026",
		term: "5 years",
	},
	{
		id: "3",
		name: "Student Loan",
		type: "student",
		principal: 45000,
		remaining: 32000,
		interestRate: 5.5,
		monthlyPayment: 485,
		nextPayment: "Feb 15, 2026",
		term: "10 years",
	},
];

const Loans = () => {
	const [loans] = useState<Loan[]>(mockLoans);
	const [selectedLoan, setSelectedLoan] = useState<string | null>(null);

	const totalDebt = loans.reduce((sum, loan) => sum + loan.remaining, 0);
	const totalMonthly = loans.reduce((sum, loan) => sum + loan.monthlyPayment, 0);

	const getIcon = (type: Loan["type"]) => {
		switch (type) {
			case "mortgage":
				return <Home className="w-5 h-5" />;
			case "auto":
				return <Car className="w-5 h-5" />;
			case "student":
				return <GraduationCap className="w-5 h-5" />;
			case "personal":
				return <Briefcase className="w-5 h-5" />;
		}
	};

	const getIconBg = (type: Loan["type"]) => {
		switch (type) {
			case "mortgage":
				return "bg-blue-100 text-blue-600";
			case "auto":
				return "bg-emerald-100 text-emerald-600";
			case "student":
				return "bg-purple-100 text-purple-600";
			case "personal":
				return "bg-amber-100 text-amber-600";
		}
	};

	const calculateProgress = (remaining: number, principal: number) => {
		return ((principal - remaining) / principal) * 100;
	};

	return (
		<div className="p-6 lg:ml-64">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
				<div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
					<div className="flex items-center gap-2 text-red-100 text-sm">
						<TrendingDown className="w-4 h-4" />
						<span>Total Debt</span>
					</div>
					<p className="text-3xl font-bold mt-2">${totalDebt.toLocaleString()}</p>
					<p className="text-red-200 text-sm mt-2">Across {loans.length} active loans</p>
				</div>
				<div className="bg-white rounded-xl p-6 shadow-sm">
					<div className="flex items-center gap-2 text-gray-500 text-sm">
						<Calendar className="w-4 h-4" />
						<span>Monthly Payments</span>
					</div>
					<p className="text-2xl font-bold mt-2 text-gray-900">${totalMonthly.toLocaleString()}</p>
					<p className="text-sm text-gray-500 mt-2">Due this month</p>
				</div>
				<div className="bg-white rounded-xl p-6 shadow-sm">
					<div className="flex items-center gap-2 text-gray-500 text-sm">
						<Calculator className="w-4 h-4" />
						<span>Avg. Interest Rate</span>
					</div>
					<p className="text-2xl font-bold mt-2 text-gray-900">
						{(loans.reduce((sum, l) => sum + l.interestRate, 0) / loans.length).toFixed(2)}%
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
					<div className="p-6 border-b border-gray-100">
						<h2 className="text-lg font-semibold">Active Loans</h2>
					</div>
					<div className="divide-y divide-gray-100">
						{loans.map((loan) => (
							<div
								key={loan.id}
								className={`p-4 cursor-pointer transition-colors ${
									selectedLoan === loan.id ? "bg-blue-50" : "hover:bg-gray-50"
								}`}
								onClick={() => setSelectedLoan(loan.id)}
							>
								<div className="flex items-center justify-between mb-3">
									<div className="flex items-center gap-4">
										<div className={`w-10 h-10 rounded-full flex items-center justify-center ${getIconBg(loan.type)}`}>
											{getIcon(loan.type)}
										</div>
										<div>
											<p className="font-medium text-gray-900">{loan.name}</p>
											<p className="text-sm text-gray-500">{loan.interestRate}% APR • {loan.term}</p>
										</div>
									</div>
									<div className="text-right">
										<p className="font-semibold text-gray-900">${loan.remaining.toLocaleString()}</p>
										<p className="text-sm text-gray-500">of ${loan.principal.toLocaleString()}</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											className="h-full bg-emerald-500 rounded-full transition-all"
											style={{ width: `${calculateProgress(loan.remaining, loan.principal)}%` }}
										/>
									</div>
									<span className="text-sm font-medium text-gray-600">
										{calculateProgress(loan.remaining, loan.principal).toFixed(0)}% paid
									</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="bg-white rounded-xl shadow-sm p-6">
					<h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
					<div className="space-y-3">
						<button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
							<DollarSign className="w-5 h-5 text-emerald-600" />
							<span className="font-medium">Make a Payment</span>
						</button>
						<button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
							<Calculator className="w-5 h-5 text-blue-600" />
							<span className="font-medium">Loan Calculator</span>
						</button>
						<button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
							<Calendar className="w-5 h-5 text-purple-600" />
							<span className="font-medium">Payment Schedule</span>
						</button>
					</div>

					<div className="mt-6 pt-6 border-t border-gray-100">
						<h4 className="font-medium mb-3">Upcoming Payments</h4>
						<div className="space-y-3">
							{loans.map((loan) => (
								<div key={loan.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
									<div className="flex items-center gap-2">
										<div className={`w-6 h-6 rounded-full flex items-center justify-center ${getIconBg(loan.type)}`}>
											{getIcon(loan.type)}
										</div>
										<span className="text-sm">{loan.nextPayment}</span>
									</div>
									<span className="text-sm font-semibold">${loan.monthlyPayment}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loans;
