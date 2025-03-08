"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
    hoverOffset: number;
  }[];
}

export default function PieChartForSocail() {
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

  const data: ChartData = {
    labels: ["Twitter", "WhatsApp", "Telegram"],

    datasets: [
      {
        label: "تعداد کلیک ها",

        data: [clickedTwitter, clickedWhatsApp, clickedTelegram],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
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
        text: "تعداد کلیک ها",

        font: {
          size: 16,
        },
        color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
      },
    },
  };

  return (
    <div className="w-full max-w-md rounded-lg p-4 shadow-lg bg-white dark:bg-gray-800 h-72 flex items-center justify-center">
      {totalClicks > 0 ? (
        <Pie data={data} options={options} />
      ) : (
        <p className="text-gray-500 dark:text-gray-400 text-center">
          هنوز هیچ اشتراک‌گذاری انجام نشده!
        </p>
      )}
    </div>
  );
}
