"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: [
    "6 days ago",
    "5 days ago",
    "4 days ago",
    "3 days ago",
    "2 days ago",
    "Yesterday",
    "Today",
  ],
  datasets: [
    {
      label: "Sales",
      data: [120, 90, 150, 80, 200, 170, 220],
      backgroundColor: "#2563eb",
    },
  ],
};

export default function SalesChart() {
  return (
    <div className="bg-white rounded shadow p-6">
      <Bar data={data} options={{ responsive: true, plugins: { legend: { display: false } } }} />
    </div>
  );
}