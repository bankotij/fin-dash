import { MockHandler } from "../../src";
import { SAMPLE_CARDS, SAMPLE_TRANSACTIONS } from "./files/response.data";

const mocks: MockHandler[] = [
	{
		pattern: "/api/getCards",
		handle: async (req, res) => {
			const data = {
				url: req.url,
				params: req.params,
				query: req.query,
				body: {
					cards: SAMPLE_CARDS
				},
			};
			await new Promise((resolve) => setTimeout(resolve, 1000));
			res.setHeader("Content-Type", "application/json");
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.end(JSON.stringify(data));
			res.end();
		},
	},
	{
		pattern: "/api/getTransactions",
		handle: async (req, res) => {
			const data = {
				url: req.url,
				params: req.params,
				query: req.query,
				body: {
					transactions: SAMPLE_TRANSACTIONS
				},
			};
			await new Promise((resolve) => setTimeout(resolve, 2000));
			res.setHeader("Content-Type", "application/json");
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.end(JSON.stringify(data));
			res.end();
		},
	},
];

export default mocks;
