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
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../utils/mock/mockData";

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
	labels: [],
	datasets: [
		{
			label: "Withdraw",
			data: [],
			backgroundColor: "#000000",
			borderRadius: 10,
			order: 1,
			barPercentage: 0.4,
			borderSkipped: false,
		},
		{
			label: "Deposit",
			data: [],
			backgroundColor: "#4070FF",
			borderRadius: 10,
			order: 2,
			barPercentage: 0.4,
			borderSkipped: false,
		},
	],
};

export function WeeklyActivityChart() {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		axios.get(API_BASE_URL + "/api/getWeeklyExpense").then((res) => {
			console.log(res);
			if (res.status === 200) {
				data.labels = res.data.body.weeklyExpenseData.labels;
				data.datasets[0].data =
					res.data.body.weeklyExpenseData.datasets.withdrawData;
				data.datasets[1].data =
					res.data.body.weeklyExpenseData.datasets.depositData;
			} else {
				setIsError(true);
				console.log("Error fetching cards");
			}
			setIsLoading(false);
		});
	}, []);

	if (isError) {
		return <div>Error fetching cards</div>;
	}

	return (
		<div>
			<div className="flex items-center justify-between pb-5">
				<h2 className="text-lg font-semibold">Weekly Activity</h2>
			</div>

			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div style={{ height: "300px" }}>
					<Bar options={options} data={data} />
				</div>
			)}
		</div>
	);
}
