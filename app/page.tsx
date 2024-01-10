import AddTodoForm from "@/components/AddProductForm";
import { randomUUID } from "crypto";

export default async function Home() {
  const resProducts = await fetch("http://localhost:4000/products", {
    cache: "no-cache",
    next: {
      tags: ["products"],
    },
  });
  const products = await resProducts.json();

  return (
    <main className="px-16">
      <h1 className="text-center text-3xl py-4">Next Server Actions</h1>
      <div className="flex items-center justify-center flex-col">
        <AddTodoForm />
        <div className="w-full pt-4 flex flex-wrap gap-3">
          {products.map((product: any, index: number) => (
            <div className="border p-2 rounded" key={index}>
              <h4>name: {product.name}</h4>
              <p>price: {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
