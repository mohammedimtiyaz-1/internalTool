"use client";
import dynamic from "next/dynamic";

const SalesChart = dynamic(() => import("./SalesChart"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
    </div>
  ),
});

export default function SaleChartWrapper() {
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
      <p className="text-gray-500 mb-4">Sales data for the last 7 days</p>
      <div className="h-64">
        <div className="flex items-center justify-center h-full">
          <SalesChart />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          This chart displays the sales trends over the past week. Hover over
          the bars to see daily sales figures.
        </p>
      </div>
    </div>
  );
}
