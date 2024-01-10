import { addNewProduct } from "@/actions/serverActions";
import React from "react";

const AddProductForm = () => {
  return (
    <div className="border p-2 ">
      <h4 className="text-center text-xl font-bold">Add Product Server</h4>
      <form action={addNewProduct}>
        <div className="py-1">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Product Name"
            className="rounded-md px-2 py-1 text-black"
          />
        </div>
        <div className="py-1">
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Product Price"
            className="rounded-md px-2 py-1 text-black"
          />
        </div>
        <div className="flex justify-center py-2">
          <button type="submit" className="text-xl border rounded-md px-2 py-1">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
