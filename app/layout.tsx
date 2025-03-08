import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "داشبورد مدیریت فروش",
    template: "%s | داشبورد مدیریت فروش",
  },
  description:
    "داشبورد مدیریت و تحلیل فروش با قابلیت نمایش نمودارهای آماری، گزارش‌گیری و مدیریت داده‌های فروش",
  keywords: [
    "داشبورد فروش",
    "مدیریت فروش",
    "تحلیل فروش",
    "نمودار فروش",
    "گزارش فروش",
    "آمار فروش",
  ],
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://your-domain.com",
    title: "داشبورد مدیریت فروش",
    description:
      "داشبورد مدیریت و تحلیل فروش با قابلیت نمایش نمودارهای آماری، گزارش‌گیری و مدیریت داده‌های فروش",
    siteName: "داشبورد مدیریت فروش",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "داشبورد مدیریت فروش",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "داشبورد مدیریت فروش",
    description: "داشبورد مدیریت و تحلیل فروش با قابلیت نمایش نمودارهای آماری",
    images: ["https://your-domain.com/twitter-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
