"use server";

import { revalidateTag } from "next/cache";

export const addNewProduct = async (e: FormData) => {
  const name = e.get("name")?.toString();
  const price = e.get("price")?.toString();
  if (!name || !price) return;
  const newProduct = {
    name,
    price,
  };
  await fetch("http://localhost:4000/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-type": "application/json",
    },
  });

  revalidateTag("products");
};
export const addNewTodo = async (e: FormData) => {
  const name = e.get("name")?.toString();
  const status = e.get("status")?.toString();
  if (!name || !status) return;
  const newTodo = {
    name,
    status,
  };
  await fetch("http://localhost:4000/todos", {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json",
    },
  });

  revalidateTag("todos");
};
