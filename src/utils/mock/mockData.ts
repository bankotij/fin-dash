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