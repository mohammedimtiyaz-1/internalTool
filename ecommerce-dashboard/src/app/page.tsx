import { getUserFromToken } from "@/lib/auth";
import Revenue from "./components/Revenue";
import ProductList from "./components/ProductList";
import SaleChartWrapper from "./components/SaleChartWrapper";

export default async function DashboardPage() {
  const user = await getUserFromToken();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold">Welcome, {user?.name ?? "User"}</h1>
        <Revenue />
        <ProductList />
        <div>
          <h2 className="text-lg font-semibold mb-2">Sales (Last 7 Days)</h2>
          <SaleChartWrapper />
        </div>
      </div>
    </main>
  );
}
