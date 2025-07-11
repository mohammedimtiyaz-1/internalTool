import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md text-center space-y-6">
        <h1 className="text-3xl font-bold">E-Commerce Admin Dashboard</h1>
        <p className="text-gray-600">
          Welcome! Use the button below to access your dashboard.
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
