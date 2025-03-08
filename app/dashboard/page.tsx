"use client";

import { useEffect, useState } from "react";
import BarChart from "../ui/chart/BarChart";
import LineChart from "../ui/chart/LineChart";
import PieChart from "../ui/chart/PieChart";
import CustomSelect from "@/components/CustomSelect";
import DownloadCSVButton from "@/components/DownloadCSVButton";
import ShareButton from "@/components/ShareButton";
import SocialClickedShow from "@/components/SocialClickedShow";
import PieChartForSocial from "../ui/chart/PieChartForSocail";
import BarChartForSocial from "../ui/chart/BarChartForSocial";
import { DashboardSkeleton } from "@/components/SkeletonLoader";
import { toast } from "sonner";
import StatisticsCard from "@/components/StatisticsCard";

interface SalesData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}

interface Statistics {
  totalSales: number;
  averageSales: number;
}

const timeRangeOptions = [
  { value: "3months", label: "3 ماهه" },
  { value: "6months", label: "6 ماهه" },
  { value: "1year", label: "سال گذشته" },
];

export default function Page() {
  const [sales, setSales] = useState<SalesData | null>(null);
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  const fetchSales = async (range: string) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : "";
      const res = await fetch(`${baseUrl}/api/sales?range=${range}`);
      if (!res.ok) {
        toast.error("خطا در دریافت داده‌های فروش");
        throw new Error("خطا در دریافت داده‌های فروش");
      }
      const rawData = await res.json();
      console.log("API Response:", { baseUrl, rawData });

      // اطمینان از وجود داده‌ها
      if (!rawData?.salesData?.labels || !rawData?.salesData?.datasets) {
        console.error("داده‌های دریافتی از API ناقص هستند:", rawData);
        toast.error("داده‌های دریافتی ناقص هستند");
        return;
      }

      // تبدیل داده‌ها به فرمت مورد نیاز نمودار
      const data: SalesData = {
        labels: rawData.salesData.labels,
        datasets: rawData.salesData.datasets,
      };

      // بررسی صحت داده‌ها
      if (data.labels.length === 0 || !data.datasets[0]?.data?.length) {
        console.error("داده‌های تبدیل شده خالی هستند:", data);
        toast.error("داده‌های دریافتی خالی هستند");
        return;
      }

      setSales(data);
      setStatistics(rawData.statistics);
    } catch (error) {
      toast.error("خطا در دریافت داده‌های فروش");
      console.error("خطا در دریافت داده‌های فروش:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSales("1year");
  }, []);

  useEffect(() => {
    if (!loading && sales) {
      setTimeout(() => {
        setFadeIn(true);
      }, 500);
    }
  }, [loading, sales]);

  const handleTimeRangeChange = (value: string) => {
    setFadeIn(false);
    fetchSales(value);
  };

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="flex flex-col gap-6">
      {/* هدر داشبورد */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">داشبورد فروش</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <DownloadCSVButton sales={sales} />
          <CustomSelect
            options={timeRangeOptions}
            onValueChange={handleTimeRangeChange}
          />
          <ShareButton />
        </div>
      </div>

      {/* نمودارهای فروش */}
      {sales ? (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <LineChart data={sales} />
          <BarChart data={sales} />
          <PieChart data={sales} />
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          هیچ داده‌ای برای نمایش وجود ندارد.
        </p>
      )}

      {/* نمایش تعداد کلیک‌های اشتراک‌گذاری */}
      <SocialClickedShow />

      {/* نمودارهای اشتراک‌گذاری */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <PieChartForSocial />
        <BarChartForSocial />
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {statistics && <StatisticsCard statistics={statistics} />}
      </div>
    </div>
  );
}
