export const SAMPLE_CARDS = [
	{
		balance: "$5,756",
		cardHolder: "Eddy Cusuma",
		validThru: "12/22",
		cardNumber: "3778 **** **** 1234",
		gradientFrom: "from-gray-500",
		gradientTo: "to-black",
	},
	{
		balance: "$2,345",
		cardHolder: "Eddy Cusuma",
		validThru: "03/25",
		cardNumber: "5421 **** **** 9876",
		gradientFrom: "from-purple-600",
		gradientTo: "to-purple-400",
	},
	{
		balance: "$8,901",
		cardHolder: "Eddy Cusuma",
		validThru: "09/23",
		cardNumber: "6011 **** **** 5432",
		gradientFrom: "from-green-600",
		gradientTo: "to-green-400",
	},
];

export const SAMPLE_TRANSACTIONS = [
	{
		id: "1",
		description: "Deposit from my Card",
		date: "20 February 2025",
		amount: -850,
		type: "card" as const,
	},
	{
		id: "2",
		description: "Deposit Paypal",
		date: "25 January 2025",
		amount: 2500,
		type: "paypal" as const,
	},
	{
		id: "3",
		description: "Jemi Wilson",
		date: "21 January 2025",
		amount: 5400,
		type: "transfer" as const,
	},
	{
		id: "4",
		description: "Deposit from my Card",
		date: "5 January 2025",
		amount: -512,
		type: "transfer" as const,
	},
	{
		id: "5",
		description: "Jemi Wilson",
		date: "12 December 2024",
		amount: 332,
		type: "transfer" as const,
	},
	{
		id: "6",
		description: "Deposit from another Card",
		date: "6 January 2024",
		amount: -6662,
		type: "transfer" as const,
	},
];

export const SAMPLE_WEEKLY_EXPENSE_DATA = {
	labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
	datasets: {
		withdrawData: [450, 340, 320, 470, 150, 380, 390],
		depositData: [230, 120, 260, 360, 230, 230, 330],
	},
};
