"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useTheme } from "next-themes";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const { resolvedTheme } = useTheme();

  const data = {
    labels: ["فروش آنلاین", "فروش حضوری", "فروش تلفنی", "فروش عمده"],
    datasets: [
      {
        data: [300, 150, 100, 200],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 10,
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
        text: "نمودار توزیع فروش",
        font: {
          size: 16,
        },
        color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
      },
    },
  };

  return (
    <div className="w-full max-w-md rounded-lg p-4 shadow-lg bg-white dark:bg-gray-800 h-72">
      <Pie data={data} options={options} />
    </div>
  );
}
