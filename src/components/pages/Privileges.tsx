import { useState } from "react";
import { 
	Crown, 
	Gift, 
	Percent, 
	Plane, 
	Coffee, 
	ShoppingBag, 
	Utensils, 
	Ticket,
	Star,
	ChevronRight,
	Lock
} from "lucide-react";

interface Privilege {
	id: string;
	name: string;
	description: string;
	icon: React.ElementType;
	category: "travel" | "dining" | "shopping" | "entertainment";
	discount: string;
	tier: "silver" | "gold" | "platinum";
	isLocked: boolean;
}

const privileges: Privilege[] = [
	{
		id: "1",
		name: "Airport Lounge Access",
		description: "Complimentary access to 1000+ airport lounges worldwide",
		icon: Plane,
		category: "travel",
		discount: "Free",
		tier: "gold",
		isLocked: false,
	},
	{
		id: "2",
		name: "Restaurant Discounts",
		description: "Up to 25% off at partner restaurants",
		icon: Utensils,
		category: "dining",
		discount: "25% Off",
		tier: "silver",
		isLocked: false,
	},
	{
		id: "3",
		name: "Shopping Cashback",
		description: "Extra cashback at premium retail partners",
		icon: ShoppingBag,
		category: "shopping",
		discount: "10% Cashback",
		tier: "silver",
		isLocked: false,
	},
	{
		id: "4",
		name: "Coffee Rewards",
		description: "Free coffee every week at Starbucks",
		icon: Coffee,
		category: "dining",
		discount: "1 Free/Week",
		tier: "silver",
		isLocked: false,
	},
	{
		id: "5",
		name: "Concert Presale",
		description: "Early access to concert and event tickets",
		icon: Ticket,
		category: "entertainment",
		discount: "48hr Early",
		tier: "gold",
		isLocked: false,
	},
	{
		id: "6",
		name: "Luxury Hotel Upgrades",
		description: "Complimentary room upgrades at 5-star hotels",
		icon: Star,
		category: "travel",
		discount: "Free Upgrade",
		tier: "platinum",
		isLocked: true,
	},
	{
		id: "7",
		name: "Personal Concierge",
		description: "24/7 personal concierge service",
		icon: Crown,
		category: "travel",
		discount: "Unlimited",
		tier: "platinum",
		isLocked: true,
	},
];

const tierColors = {
	silver: { bg: "bg-gray-100", text: "text-gray-600", badge: "bg-gray-200" },
	gold: { bg: "bg-amber-50", text: "text-amber-700", badge: "bg-amber-100" },
	platinum: { bg: "bg-purple-50", text: "text-purple-700", badge: "bg-purple-100" },
};

const categoryIcons = {
	travel: Plane,
	dining: Utensils,
	shopping: ShoppingBag,
	entertainment: Ticket,
};

const Privileges = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const currentTier = "gold";

	const filteredPrivileges = privileges.filter(
		(p) => selectedCategory === "all" || p.category === selectedCategory
	);

	const categories = [
		{ id: "all", name: "All Privileges" },
		{ id: "travel", name: "Travel" },
		{ id: "dining", name: "Dining" },
		{ id: "shopping", name: "Shopping" },
		{ id: "entertainment", name: "Entertainment" },
	];

	return (
		<div className="p-6 lg:ml-64">
			<div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 mb-8 text-white">
				<div className="flex items-center justify-between">
					<div>
						<div className="flex items-center gap-2 mb-2">
							<Crown className="w-6 h-6" />
							<span className="text-sm font-medium text-amber-100">Your Membership</span>
						</div>
						<h2 className="text-3xl font-bold">Gold Member</h2>
						<p className="text-amber-100 mt-2">You have access to 5 exclusive privileges</p>
					</div>
					<div className="text-right">
						<p className="text-sm text-amber-100">Points Balance</p>
						<p className="text-3xl font-bold">24,580</p>
						<button className="mt-2 px-4 py-1 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-colors">
							Redeem Points
						</button>
					</div>
				</div>
				<div className="mt-6 pt-4 border-t border-amber-400/30">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 rounded-full bg-gray-300"></div>
								<span className="text-sm">Silver</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 rounded-full bg-amber-300"></div>
								<span className="text-sm font-medium">Gold</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 rounded-full bg-purple-300"></div>
								<span className="text-sm">Platinum</span>
							</div>
						</div>
						<p className="text-sm">5,420 points to Platinum</p>
					</div>
					<div className="mt-2 h-2 bg-amber-400/30 rounded-full overflow-hidden">
						<div className="h-full w-[82%] bg-white rounded-full"></div>
					</div>
				</div>
			</div>

			<div className="flex gap-2 mb-6 overflow-x-auto pb-2">
				{categories.map((category) => (
					<button
						key={category.id}
						onClick={() => setSelectedCategory(category.id)}
						className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
							selectedCategory === category.id
								? "bg-gray-900 text-white"
								: "bg-gray-100 text-gray-600 hover:bg-gray-200"
						}`}
					>
						{category.name}
					</button>
				))}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{filteredPrivileges.map((privilege) => {
					const Icon = privilege.icon;
					const tierStyle = tierColors[privilege.tier];
					return (
						<div
							key={privilege.id}
							className={`bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-all ${
								privilege.isLocked ? "opacity-60" : "hover:shadow-md cursor-pointer"
							}`}
						>
							<div className="flex items-start justify-between mb-4">
								<div className={`w-12 h-12 rounded-xl ${tierStyle.bg} flex items-center justify-center`}>
									{privilege.isLocked ? (
										<Lock className="w-6 h-6 text-gray-400" />
									) : (
										<Icon className={`w-6 h-6 ${tierStyle.text}`} />
									)}
								</div>
								<span className={`px-2 py-1 rounded-full text-xs font-medium ${tierStyle.badge} ${tierStyle.text}`}>
									{privilege.tier.charAt(0).toUpperCase() + privilege.tier.slice(1)}
								</span>
							</div>
							<h4 className="font-semibold text-gray-900 mb-1">{privilege.name}</h4>
							<p className="text-sm text-gray-500 mb-4">{privilege.description}</p>
							<div className="flex items-center justify-between">
								<span className="text-sm font-semibold text-emerald-600">{privilege.discount}</span>
								{privilege.isLocked ? (
									<span className="text-xs text-gray-400">Upgrade to unlock</span>
								) : (
									<button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
										Use Now <ChevronRight className="w-4 h-4" />
									</button>
								)}
							</div>
						</div>
					);
				})}
			</div>

			<div className="mt-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white">
				<div className="flex items-center justify-between">
					<div>
						<h3 className="text-xl font-bold mb-2">Upgrade to Platinum</h3>
						<p className="text-purple-200">Unlock all privileges including luxury hotel upgrades and personal concierge</p>
					</div>
					<button className="px-6 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
};

export default Privileges;
