"use client";
import { addNewTodo } from "@/actions/serverActions";
import React, { useState, useTransition } from "react";

type TTodo = { name: string; status: string };

const AddTodoForm = () => {
  const [todo, setTodo] = useState<TTodo>({
    name: "",
    status: "",
  });
  const [isPending, startTransition] = useTransition();
  const handleAddTodo = () => {
    const formData = new FormData();
    formData.append("name", `${todo.name}`);
    formData.append("status", `${todo.status}`);
    addNewTodo(formData);
  };
  return (
    <div className="border p-2 ">
      <h4 className="text-center text-xl font-bold">Add Todo from Client</h4>
      <form action={() => startTransition(handleAddTodo)}>
        <div className="py-1">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Todo Name"
            value={todo.name}
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
            className="rounded-md px-2 py-1 text-black"
          />
        </div>
        <div className="py-1">
          <input
            type="text"
            name="status"
            id="status"
            onChange={(e) => setTodo({ ...todo, status: e.target.value })}
            placeholder="Todo Status"
            className="rounded-md px-2 py-1 text-black"
          />
        </div>
        <div className="flex justify-center py-2">
          <button type="submit" className="text-xl border rounded-md px-2 py-1">
            {isPending ? "Adding..." : "Add Todo"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
