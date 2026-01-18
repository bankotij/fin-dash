import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../utils/mock/mockData";
import { Plus, CreditCard, Lock, Unlock, MoreVertical, Eye, EyeOff, Snowflake, Trash2 } from "lucide-react";

interface Card {
	balance: string;
	cardHolder: string;
	validThru?: string;
	cardNumber: string;
	gradientFrom: string;
	gradientTo: string;
}

const Cards = () => {
	const [cards, setCards] = useState<Card[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedCard, setSelectedCard] = useState<number | null>(null);
	const [showCardNumber, setShowCardNumber] = useState<{ [key: number]: boolean }>({});

	useEffect(() => {
		axios
			.get(API_BASE_URL + "/api/getCards")
			.then((res) => {
				if (res.status === 200) {
					setCards(res.data.body.cards);
				}
			})
			.catch(() => {})
			.finally(() => setIsLoading(false));
	}, []);

	const toggleCardNumber = (index: number) => {
		setShowCardNumber((prev) => ({ ...prev, [index]: !prev[index] }));
	};

	return (
		<div className="p-6 lg:ml-64">
			<div className="flex justify-between items-center mb-6">
				<div>
					<h2 className="text-xl font-semibold text-gray-900">My Cards</h2>
					<p className="text-sm text-gray-500">Manage your credit and debit cards</p>
				</div>
				<button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
					<Plus className="w-4 h-4" />
					Add New Card
				</button>
			</div>

			{isLoading ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[...Array(3)].map((_, i) => (
						<div key={i} className="h-48 bg-gray-200 rounded-xl animate-pulse"></div>
					))}
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
					{cards.map((card, index) => (
						<div
							key={index}
							className={`relative overflow-hidden rounded-xl bg-gradient-to-br p-6 text-white cursor-pointer transition-all duration-300 ${card.gradientFrom} ${card.gradientTo} ${
								selectedCard === index ? "ring-4 ring-blue-400 scale-105" : "hover:scale-102"
							}`}
							onClick={() => setSelectedCard(index)}
						>
							<div className="flex justify-between items-start mb-8">
								<div>
									<p className="text-sm text-white/70">Balance</p>
									<p className="text-2xl font-bold">{card.balance}</p>
								</div>
								<CreditCard className="w-8 h-8 text-white/50" />
							</div>
							<div className="space-y-2">
								<p className="text-sm text-white/70">Card Holder</p>
								<p className="font-semibold">{card.cardHolder}</p>
								<div className="flex items-center gap-2">
									<p className="font-mono tracking-wider">
										{showCardNumber[index] ? card.cardNumber.replace(/\*/g, "1") : card.cardNumber}
									</p>
									<button
										onClick={(e) => {
											e.stopPropagation();
											toggleCardNumber(index);
										}}
										className="p-1 hover:bg-white/20 rounded"
									>
										{showCardNumber[index] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
									</button>
								</div>
							</div>
							{card.validThru && (
								<div className="absolute bottom-6 right-6 text-right">
									<p className="text-xs text-white/70">Valid Thru</p>
									<p className="font-mono">{card.validThru}</p>
								</div>
							)}
						</div>
					))}
				</div>
			)}

			{selectedCard !== null && cards[selectedCard] && (
				<div className="bg-white rounded-xl shadow-sm p-6">
					<h3 className="text-lg font-semibold mb-4">Card Actions</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<button className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
							<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
								<Lock className="w-5 h-5 text-blue-600" />
							</div>
							<span className="text-sm font-medium">Lock Card</span>
						</button>
						<button className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
							<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
								<Unlock className="w-5 h-5 text-emerald-600" />
							</div>
							<span className="text-sm font-medium">Unlock Card</span>
						</button>
						<button className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
							<div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
								<Snowflake className="w-5 h-5 text-cyan-600" />
							</div>
							<span className="text-sm font-medium">Freeze Card</span>
						</button>
						<button className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
							<div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
								<Trash2 className="w-5 h-5 text-red-600" />
							</div>
							<span className="text-sm font-medium">Cancel Card</span>
						</button>
					</div>

					<div className="mt-6 pt-6 border-t border-gray-100">
						<h4 className="font-medium mb-4">Card Settings</h4>
						<div className="space-y-3">
							<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
								<span className="text-sm">Online Payments</span>
								<label className="relative inline-flex items-center cursor-pointer">
									<input type="checkbox" defaultChecked className="sr-only peer" />
									<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
								</label>
							</div>
							<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
								<span className="text-sm">ATM Withdrawals</span>
								<label className="relative inline-flex items-center cursor-pointer">
									<input type="checkbox" defaultChecked className="sr-only peer" />
									<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
								</label>
							</div>
							<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
								<span className="text-sm">International Transactions</span>
								<label className="relative inline-flex items-center cursor-pointer">
									<input type="checkbox" className="sr-only peer" />
									<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
								</label>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cards;
