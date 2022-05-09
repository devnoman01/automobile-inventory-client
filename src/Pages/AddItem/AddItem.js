import React, { useRef } from "react";
import { toast } from "react-toastify";
import "./AddItem.css";

const AddItem = () => {
  const nameRef = useRef("");
  const categoryRef = useRef("");
  const priceRef = useRef("");
  const quantityRef = useRef("");
  const supplierRef = useRef("");
  const imageRef = useRef("");
  const descriptionRef = useRef("");

  const handleAddItem = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const category = categoryRef.current.value.toUpperCase();
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const supplier = supplierRef.current.value.toUpperCase();
    const image = imageRef.current.value;
    const description = descriptionRef.current.value;

    const newVehicle = {
      name,
      category,
      price,
      quantity,
      supplier,
      image,
      description,
    };

    const url = `http://localhost:5000/vehicle`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVehicle),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("New Vehicle Added");
      });

    e.target.reset();
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Add Inventory Item</h1>
      <form
        onSubmit={handleAddItem}
        className="col-lg-6 col-md-8 col-sm-12 p-4 mx-auto bg-[#F1F1F1] border-2 border-gray-200 rounded-lg shadow-md add-item-form"
      >
        <label htmlFor="name">Vehicle Name</label>
        <input
          required
          ref={nameRef}
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-2 leading-8 transition-colors duration-200 ease-in-out mt-1 mb-2"
        />
        <label htmlFor="category">Vehicle Category</label>
        <input
          required
          ref={categoryRef}
          type="text"
          id="category"
          name="category"
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-2 leading-8 transition-colors duration-200 ease-in-out mt-1 mb-2"
        />
        <label htmlFor="price">Vehicle Price</label>
        <input
          required
          ref={priceRef}
          type="number"
          id="price"
          name="price"
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-2 leading-8 transition-colors duration-200 ease-in-out mt-1 mb-2"
        />
        <label htmlFor="quantity">Vehicle Quantity/Stock</label>
        <input
          required
          ref={quantityRef}
          type="number"
          id="quantity"
          name="quantity"
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-2 leading-8 transition-colors duration-200 ease-in-out mt-1 mb-2"
        />
        <label htmlFor="supplier">Supplier Name</label>
        <input
          required
          ref={supplierRef}
          type="text"
          id="supplier"
          name="supplier"
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-2 leading-8 transition-colors duration-200 ease-in-out mt-1 mb-2"
        />
        <label htmlFor="image">Vehicle Image</label>
        <input
          required
          ref={imageRef}
          type="text"
          id="image"
          name="image"
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-2 leading-8 transition-colors duration-200 ease-in-out mt-1 mb-2"
        />
        <label htmlFor="description">Description</label>
        <textarea
          required
          ref={descriptionRef}
          type="text"
          id="description"
          name="description"
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-2 leading-8 transition-colors duration-200 ease-in-out mt-1 mb-2"
        />
        <input
          type="submit"
          className="w-full mt-4 py-2 bg-[#186340] text-[#DDFBEC] border-1 border-[#186340] rounded hover:text-[#186340] hover:bg-[#DDFBEC]"
          value="Add Item"
        />
        <br />
      </form>
    </div>
  );
};

export default AddItem;
