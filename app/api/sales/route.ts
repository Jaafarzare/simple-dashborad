import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const range = request.nextUrl.searchParams.get("range") || "all";

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
      datasets: [
        {
          label: "فروش ماهانه",
          data: [65, 45, 78, 56, 89, 63, 72, 84],
        },
      ],
    };

    let filteredData = salesData;

    // ✅ اعمال فیلتر بر اساس range (بدون حذف label)
    if (range === "3months") {
      filteredData = {
        labels: salesData.labels.slice(-3),
        datasets: salesData.datasets.map((dataset) => ({
          label: dataset.label,
          data: dataset.data.slice(-3),
        })),
      };
    } else if (range === "6months") {
      filteredData = {
        labels: salesData.labels.slice(-6),
        datasets: salesData.datasets.map((dataset) => ({
          label: dataset.label,
          data: dataset.data.slice(-6),
        })),
      };
    } else if (range === "1year") {
      filteredData = salesData;
    }

    // ✅ بررسی مقدار `datasets`
    if (!filteredData.datasets || filteredData.datasets.length === 0) {
      filteredData = {
        labels: [],
        datasets: [{ label: "بدون داده", data: [] }],
      };
    }

    // ✅ محاسبه مجموع و میانگین فروش
    const totalSales = salesData.datasets[0].data.reduce(
      (acc, curr) => acc + curr,
      0
    );
    const averageSales = totalSales / salesData.datasets[0].data.length;

    return new NextResponse(
      JSON.stringify({
        statistics: { totalSales, averageSales },
        salesData: filteredData,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    console.error("Error in sales API:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
