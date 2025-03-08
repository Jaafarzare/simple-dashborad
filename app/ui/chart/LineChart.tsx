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

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}

interface LineChartProps {
  data: ChartData;
}

export default function LineChart({ data }: LineChartProps) {
  const { resolvedTheme } = useTheme();

  if (!data?.datasets?.length) {
    return null;
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.datasets[0].label,
        data: data.datasets[0].data,
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
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
        text: data.datasets[0].label,
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
      <Line data={chartData} options={options} />
    </div>
  );
}
