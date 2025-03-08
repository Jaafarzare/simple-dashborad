import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "داشبورد فروش",
  description: "مشاهده و تحلیل آمار فروش، نمودارها و گزارش‌های تحلیلی فروش",
  openGraph: {
    title: "داشبورد فروش | داشبورد مدیریت فروش",
    description: "مشاهده و تحلیل آمار فروش، نمودارها و گزارش‌های تحلیلی فروش",
    images: [
      {
        url: "https://your-domain.com/dashboard-preview.jpg",
        width: 1200,
        height: 630,
        alt: "داشبورد فروش",
      },
    ],
  },
  robots: {
    index: false, // صفحه داشبورد نباید ایندکس شود
    follow: true,
  },
};
