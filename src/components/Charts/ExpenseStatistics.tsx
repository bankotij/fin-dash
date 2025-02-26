"use client";

import { Pie } from "react-chartjs-2";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data = {
	labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
	datasets: [
		{
			data: [30, 15, 20, 35],
			backgroundColor: ["#4318FF", "#F4A227", "#2D907C", "#343C6A"],
			backgroundColorLabel: ["#4312FF", "#F4A127", "#2D207C", "#341C6A"],
			borderColor: "#fff",
			borderWidth: 2,
			offset: 10,
		},
	],
};

const options: ChartOptions<"pie"> = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: true,
		},
		datalabels: {
			color: "#FFFFFF",
			font: {
				weight: "bold",
			},
			formatter: (value: number) => {
				return `${value}%\n`;
			},
			textAlign: "center",
			anchor: "center",
			align: "center",
			clamp: true,
			padding: 10,
		},
	},
};

export function ExpenseStatistics() {
	return (
		<>
			<div className="flex items-center justify-between pb-5">
				<h2 className="text-lg font-semibold">Expense Statistics</h2>
			</div>
			<Pie data={data} options={options} />
		</>
	);
}
