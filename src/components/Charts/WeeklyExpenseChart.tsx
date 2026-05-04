import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	type ChartData,
	type ChartOptions,
} from "chart.js";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../utils/mock/mockData";
import { FALLBACK_WEEKLY_EXPENSE } from "../../utils/mock/fallbackDashboard";
import { ChartLoader } from "../common/Loaders/Loader";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function payloadToChartData(payload: {
	labels: string[];
	withdrawData: number[];
	depositData: number[];
}): ChartData<"bar"> {
	return {
		labels: payload.labels,
		datasets: [
			{
				label: "Withdraw",
				data: payload.withdrawData,
				backgroundColor: "#0f172a",
				borderRadius: 10,
				order: 1,
				barPercentage: 0.4,
				borderSkipped: false,
			},
			{
				label: "Deposit",
				data: payload.depositData,
				backgroundColor: "#4070FF",
				borderRadius: 10,
				order: 2,
				barPercentage: 0.4,
				borderSkipped: false,
			},
		],
	};
}

export function WeeklyActivityChart() {
	const [isLoading, setIsLoading] = useState(true);
	const [chartData, setChartData] = useState<ChartData<"bar">>(() =>
		payloadToChartData(FALLBACK_WEEKLY_EXPENSE),
	);

	useEffect(() => {
		const applyFallback = () => setChartData(payloadToChartData(FALLBACK_WEEKLY_EXPENSE));

		if (!API_BASE_URL) {
			applyFallback();
			setIsLoading(false);
			return;
		}

		axios
			.get(API_BASE_URL + "/api/getWeeklyExpense")
			.then((res) => {
				if (res.status === 200 && res.data?.body?.weeklyExpenseData) {
					const w = res.data.body.weeklyExpenseData;
					setChartData(
						payloadToChartData({
							labels: w.labels,
							withdrawData: w.datasets.withdrawData,
							depositData: w.datasets.depositData,
						}),
					);
				} else {
					applyFallback();
				}
			})
			.catch(applyFallback)
			.finally(() => setIsLoading(false));
	}, []);

	const yMax = useMemo(() => {
		const d0 = chartData.datasets[0]?.data as number[] | undefined;
		const d1 = chartData.datasets[1]?.data as number[] | undefined;
		const values = [...(d0 ?? []), ...(d1 ?? [])];
		if (!values.length) return 500;
		const peak = Math.max(...values, 0);
		const padded = Math.ceil(peak * 1.12);
		const step = 100;
		return Math.max(500, Math.ceil(padded / step) * step);
	}, [chartData]);

	const options: ChartOptions<"bar"> = useMemo(
		() => ({
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
					max: yMax,
					ticks: {
						stepSize: Math.max(100, Math.round(yMax / 5 / 100) * 100),
					},
					border: {
						dash: [5, 5],
					},
				},
			},
			maintainAspectRatio: false,
		}),
		[yMax],
	);

	return (
		<div className="rounded-xl">
			<div className="flex items-center justify-between pb-5">
				<h2 className="text-lg font-semibold text-[#343c6a]">Weekly activity</h2>
			</div>

			{isLoading ? (
				<ChartLoader chartType="bar" />
			) : (
				<div className="h-[300px]">
					<Bar options={options} data={chartData} />
				</div>
			)}
		</div>
	);
}
