import { NextResponse } from "next/server";

export async function GET() {
  // داده‌های نمونه برای نمودارها
  const salesData = {
    labels: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
    ],
    datasets: [65, 45, 78, 56, 89, 63, 72, 84],
  };

  return NextResponse.json(salesData);
}
