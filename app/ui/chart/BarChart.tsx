"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "next-themes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartData {
  labels: string[];
  datasets: number[];
}

interface BarChartProps {
  data: ChartData;
}

export default function BarChart({ data }: BarChartProps) {
  const { resolvedTheme } = useTheme();

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "میزان فروش ماهانه",
        data: data.datasets,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(100, 181, 246, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(100, 181, 246)",
        ],
        borderWidth: 1,
        barPercentage: 0.8,
        borderRadius: 5,
      },
    ],
  };

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
        beginAtZero: true,
        max: 100,
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
      <Bar data={chartData} options={options} />
    </div>
  );
}
