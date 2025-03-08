"use client";

import { CustomCard } from "./CustomCard ";

interface StatisticsCardProps {
  statistics: {
    totalSales: number;
    averageSales: number;
  };
}

export default function StatisticsCard({ statistics }: StatisticsCardProps) {
  return (
    <CustomCard
      title="آمار فروش"
      content={
        <div>
          <p>
            میزان فروش کلی:{" "}
            {new Intl.NumberFormat("fa-IR").format(statistics.totalSales)}
          </p>
          <p>
            میزان فروش متوسط:{" "}
            {new Intl.NumberFormat("fa-IR", {
              maximumFractionDigits: 2,
            }).format(statistics.averageSales)}
          </p>
        </div>
      }
    />
  );
}
