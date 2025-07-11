const products = [
  { name: "T-Shirt", price: 25, stock: 120 },
  { name: "Sneakers", price: 80, stock: 45 },
  { name: "Backpack", price: 50, stock: 30 },
];

export default function ProductList() {
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Product List</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Product Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i} className="border-t">
              <td className="py-2">{p.name}</td>
              <td className="py-2">${p.price}</td>
              <td className="py-2">{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}