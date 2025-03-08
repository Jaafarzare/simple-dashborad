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
import { useEffect, useState } from "react";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
    barPercentage: number;
    borderRadius: number;
  }[];
}

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

export default function BarChartForSocial() {
  const { resolvedTheme } = useTheme();

  const [clickedTwitter, setClickedTwitter] = useState(0);
  const [clickedWhatsApp, setClickedWhatsApp] = useState(0);
  const [clickedTelegram, setClickedTelegram] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setClickedTwitter(
        parseInt(localStorage.getItem("clickedTwitter") || "0")
      );
      setClickedWhatsApp(
        parseInt(localStorage.getItem("clickedWhatsApp") || "0")
      );
      setClickedTelegram(
        parseInt(localStorage.getItem("clickedTelegram") || "0")
      );
    }
  }, []);

  const totalClicks = clickedTwitter + clickedWhatsApp + clickedTelegram;
  const maxClicks =
    Math.max(clickedTwitter, clickedWhatsApp, clickedTelegram) + 10;

  const data: ChartData = {
    labels: ["Twitter", "WhatsApp", "Telegram"],
    datasets: [
      {
        label: "تعداد کلیک ها",
        data: [clickedTwitter, clickedWhatsApp, clickedTelegram],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
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
        text: "تعداد کلیک ها",
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
          text: "تعداد کلیک ها",
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
        max: totalClicks > 0 ? maxClicks : 10,
      },
      x: {
        title: {
          display: true,
          text: "شبکه ها",
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
    <div className="w-full max-w-md rounded-lg p-4 shadow-lg bg-white dark:bg-gray-800 h-72 flex items-center justify-center">
      {totalClicks > 0 ? (
        <Bar data={data} options={options} />
      ) : (
        <p className="text-gray-500 dark:text-gray-400 text-center">
          هنوز هیچ اشتراک‌گذاری انجام نشده!
        </p>
      )}
    </div>
  );
}
