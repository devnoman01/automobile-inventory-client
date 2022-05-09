import React from "react";

const AddItem = () => {
  let errorElement;
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Add Inventory Item</h1>
      <form className="col-lg-4 col-md-6 col-sm-12 p-4 mx-auto bg-[#F1F1F1] border-2 border-gray-200 rounded-lg shadow-md add-item-form">
        <label htmlFor="itemName">Vehicle Name</label>
        <input
          required
          // ref={emailRef}
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2"
        />
        <label htmlFor="password">Vehicle Category</label>
        <input
          required
          // ref={passwordRef}
          type="text"
          id="category"
          name="category"
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2"
        />
        <label htmlFor="itemName">Vehicle Price</label>
        <input
          required
          // ref={emailRef}
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2"
        />
        <label htmlFor="itemName">Vehicle Quantity/Stock</label>
        <input
          required
          // ref={emailRef}
          type="number"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2"
        />
        <button className="w-full mt-4 py-2 bg-[#186340] text-[#DDFBEC] border-1 border-[#186340] rounded hover:text-[#186340] hover:bg-[#DDFBEC]">
          Add Item
        </button>
        <br />
        {errorElement}
      </form>
    </div>
  );
};

export default AddItem;
