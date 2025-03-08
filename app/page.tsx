import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "داشبورد مدیریت فروش",
  description:
    "به داشبورد مدیریت فروش خوش آمدید. مشاهده آمار و تحلیل فروش در یک نگاه",
  openGraph: {
    title: "صفحه اصلی | داشبورد مدیریت فروش",
    description:
      "به داشبورد مدیریت فروش خوش آمدید. مشاهده آمار و تحلیل فروش در یک نگاه",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          به داشبورد مدیریت فروش خوش آمدید
        </h1>
        <p className="text-xl text-muted-foreground">
          مشاهده آمار و تحلیل فروش در یک نگاه
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            ورود به داشبورد
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            مستندات
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">نمودارهای تعاملی</h2>
            <p className="text-sm text-muted-foreground">
              مشاهده داده‌های فروش در قالب نمودارهای متنوع و تعاملی
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">گزارش‌گیری پیشرفته</h2>
            <p className="text-sm text-muted-foreground">
              امکان دریافت گزارش‌های متنوع از داده‌های فروش
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">تحلیل داده‌ها</h2>
            <p className="text-sm text-muted-foreground">
              تحلیل و بررسی روند فروش با ابزارهای پیشرفته
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
