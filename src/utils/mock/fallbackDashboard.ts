/** Static dashboard payloads when no API is configured or the request fails — keeps the UI complete on static hosts. */

export type CarouselCard = {
	balance: string;
	cardHolder: string;
	cardNumber: string;
	gradientFrom: string;
	gradientTo: string;
};

export type DashboardTransaction = {
	id: string;
	description: string;
	date: string;
	amount: number;
	type: "card" | "paypal" | "transfer";
};

export const FALLBACK_CAROUSEL_CARDS: CarouselCard[] = [
	{
		balance: "$14,280.40",
		cardHolder: "Jordan Lee",
		cardNumber: "4921 •••• •••• 8834",
		gradientFrom: "from-violet-600",
		gradientTo: "to-indigo-800",
	},
	{
		balance: "$8,942.00",
		cardHolder: "Sam Rivera",
		cardNumber: "5521 •••• •••• 1092",
		gradientFrom: "from-sky-500",
		gradientTo: "to-blue-700",
	},
	{
		balance: "$3,156.25",
		cardHolder: "Taylor Chen",
		cardNumber: "3782 •••• •••• 4410",
		gradientFrom: "from-emerald-500",
		gradientTo: "to-teal-700",
	},
];

export const FALLBACK_TRANSACTIONS: DashboardTransaction[] = [
	{ id: "1", description: "Salary deposit", date: "Today · 9:12 AM", amount: 4200, type: "transfer" },
	{ id: "2", description: "Whole Foods Market", date: "Yesterday", amount: -84.5, type: "card" },
	{ id: "3", description: "Electric utility", date: "Mon, Jan 12", amount: -132.0, type: "paypal" },
	{ id: "4", description: "Coffee Lab", date: "Sun, Jan 11", amount: -6.75, type: "card" },
	{ id: "5", description: "Freelance payout", date: "Sat, Jan 10", amount: 850.0, type: "transfer" },
	{ id: "6", description: "Transit pass", date: "Fri, Jan 9", amount: -127.0, type: "card" },
];

export type WeeklyExpensePayload = {
	labels: string[];
	withdrawData: number[];
	depositData: number[];
};

export const FALLBACK_WEEKLY_EXPENSE: WeeklyExpensePayload = {
	labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
	withdrawData: [140, 190, 165, 210, 175, 155, 188],
	depositData: [260, 310, 290, 340, 300, 280, 320],
};
