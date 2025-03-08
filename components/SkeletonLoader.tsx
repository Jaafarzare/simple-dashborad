// components/DashboardSkeleton.tsx

import React from "react";

export function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {/* اسکلتون هدر داشبورد */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-pulse">
        <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* اسکلتون نمودارهای فروش */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {/* اسکلتون کارتهای تعداد کلیک */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {/* اسکلتون نمودارهای اشتراک‌گذاری */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}
