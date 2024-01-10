import AddTodoForm from "@/components/AddTodoForm";
import React from "react";

const Todos = async () => {
  const resTodos = await fetch("http://localhost:4000/todos", {
    cache: "no-cache",
    next: {
      tags: ["todos"],
    },
  });
  const todos = await resTodos.json();

  return (
    <main className="px-16">
      <h1 className="text-center text-3xl py-4">
        Next Server Actions on Client Side
      </h1>
      <div className="flex items-center justify-center flex-col">
        <AddTodoForm />
        <div className="w-full pt-4 flex flex-wrap gap-3">
          {todos.map((todo: any, index: number) => (
            <div className="border p-2 rounded" key={index}>
              <h4>name: {todo.name}</h4>
              <p>status: {todo.status}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Todos;
