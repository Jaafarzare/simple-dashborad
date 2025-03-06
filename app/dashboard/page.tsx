"use client";

import { useEffect, useState } from "react";
import BarChart from "../ui/chart/BarChart";
import LineChart from "../ui/chart/LineChart";
import PieChart from "../ui/chart/PieChart";
import TimeRangeSelect from "@/components/ui/time-range-select";

interface SalesData {
  labels: string[];
  datasets: number[];
}

export default function Page() {
  const [sales, setSales] = useState<SalesData | null>(null);

  useEffect(() => {
    async function fetchSales() {
      try {
        const salesData = await fetch("/api/sales");
        const sales = await salesData.json();
        setSales(sales);
      } catch (error) {
        console.error("خطا در دریافت داده‌های فروش:", error);
      }
    }
    fetchSales();
  }, []);

  if (!sales) {
    return (
      <div className="flex justify-center items-center h-full">
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">داشبورد فروش</h1>
        <TimeRangeSelect />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LineChart data={sales} />
        <BarChart data={sales} />
        <PieChart data={sales} />
      </div>
    </div>
  );
}
