"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface SalesData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}

interface DownloadCSVButtonProps {
  sales: SalesData | null;
}

export default function DownloadCSVButton({ sales }: DownloadCSVButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  if (!sales) return null;

  const handleDownloadCSV = () => {
    let csvContent = "\uFEFF";

    // ایجاد هدر فایل CSV
    csvContent += "ماه," + sales.datasets.map((d) => d.label).join(",") + "\n";

    // ایجاد محتوای داده‌ها
    sales.labels.forEach((label, i) => {
      const row = [label, ...sales.datasets.map((d) => d.data[i])].join(",");
      csvContent += row + "\n";
    });

    // ایجاد فایل و دانلود
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "sales_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("✅ دانلود موفقیت‌آمیز", {
        description: "داده‌های فروش با موفقیت دانلود شدند.",
        duration: 3000,
      });
    }, 1500);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDownloadCSV}
      className="hover:cursor-pointer transition-all py-4"
      disabled={isLoading}
    >
      {isLoading ? "در حال دانلود..." : "دانلود داده‌ها"}
    </Button>
  );
}
