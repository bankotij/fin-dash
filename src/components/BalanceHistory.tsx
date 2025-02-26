"use client";

import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
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
	  // TODO: Make this dynamic
	  min: 0,
      max: 25000,
      ticks: {
        stepSize: 2500,
      },
      border: {
        dash: [5, 5],
      },
    },
  },
};

const initialData = {
  labels: ["July", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      label: "Balance",
      data: [3042, 6066 , 22505, 10402, 18002, 8471, 15231],
      borderColor: "#4070FF",
      // This placeholder will be replaced with the gradient
      backgroundColor: "rgba(64,112,255,0.3)",
      tension: 0.3,
      fill: true,
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};

export function BalanceHistoryTracker() {
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;
      if (!chartArea) return; // wait until chart area is available

      // Create a vertical gradient from top to bottom of the chart area
      const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
      gradient.addColorStop(0, "rgba(64,112,255,0.5)");
      gradient.addColorStop(1, "rgba(64,112,255,0)");

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, [chartRef.current?.chartArea]);

  return (
    <div>
      <div className="flex items-center justify-between pb-5">
        <h2 className="text-lg font-semibold">Balance History</h2>
      </div>
      <div style={{ height: "300px" }}>
        <Line ref={chartRef} options={options} data={initialData} />
      </div>
    </div>
  );
}
