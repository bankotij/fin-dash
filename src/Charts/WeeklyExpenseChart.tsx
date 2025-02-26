"use client";

import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartOptions,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const options: ChartOptions<"bar"> = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
			align: "end",
			labels: {
				usePointStyle: true,
				pointStyle: "circle",
				boxWidth: 8,
				padding: 20,
			},
		},
		tooltip: {
			backgroundColor: "white",
			titleColor: "#1E293B",
			bodyColor: "#1E293B",
			borderColor: "#E2E8F0",
			borderWidth: 1,
			padding: 12,
			displayColors: false,
		},
		datalabels: {
			display: false,
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
		y: {
			grid: {
				color: "#F3F3F5",
			},
			min: 0,
			max: 500,
			ticks: {
				stepSize: 100,
			},
			border: {
				dash: [5, 5],
			},
		},
	},
	maintainAspectRatio: false,
};

const data = {
	labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
	datasets: [
		{
			label: "Withdraw",
			data: [450, 340, 320, 470, 150, 380, 390],
			backgroundColor: "#000000",
			borderRadius: 10,
			order: 1,
			barPercentage: 0.4,
			borderSkipped: false,
		},
		{
			label: "Deposit",
			data: [230, 120, 260, 360, 230, 230, 330],
			backgroundColor: "#4070FF",
			borderRadius: 10,
			order: 2,
			barPercentage: 0.4,
			borderSkipped: false,
		},
	],
};

export function WeeklyActivityChart() {
	return (
		<div>
			<div className="flex items-center justify-between pb-5">
				<h2 className="text-lg font-semibold">Weekly Activity</h2>
			</div>
			<div style={{ height: "300px" }}>
				<Bar options={options} data={data} />
			</div>
		</div>
	);
}