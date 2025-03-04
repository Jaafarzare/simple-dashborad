"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "next-themes";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart() {
  const { resolvedTheme } = useTheme();

  // X - axis lable
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];

  // Data want to show on chart
  const datasets = [12, 45, 67, 43, 89, 34, 67, 43];

  const data = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "میزان فروش ماهانه",
        data: datasets,
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5,
      },
    ],
  };

  // To make configuration
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
        },
      },
      title: {
        display: true,
        text: "نمودار فروش ماهانه",
        font: {
          size: 16,
        },
        color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "تعداد فروش",
          color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
        },
        ticks: {
          color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
        },
        grid: {
          color:
            resolvedTheme === "dark"
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        title: {
          display: true,
          text: "ماه ها",
          color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
        },
        ticks: {
          color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
        },
        grid: {
          color:
            resolvedTheme === "dark"
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  return (
    <div className="w-full max-w-3xl h-72 rounded-lg p-4 shadow-lg bg-white dark:bg-gray-800">
      <Line data={data} options={options} />
    </div>
  );
}
