import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import useVehicleDetail from "../../../Hooks/useVehicleDetail";
import useVehicles from "../../../Hooks/useVehicles";

const ManageItem = () => {
  const { vehicleId } = useParams();
  const [vehicle] = useVehicleDetail(vehicleId);
  const { _id, name, category, description, price, quantity, image, supplier } =
    vehicle;

  return (
    <>
      <div className="container px-3 py-12 mx-auto">
        <h1 className="text-center mb-5">Manage/Update Item</h1>
        <div className="bg-[#F7F7F7] p-4 rounded border shadow mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <img alt="ecommerce" className="img-fluid rounded" src={image} />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font tracking-widest">{category}</h2>
            <h1 className="text-3xl title-font font-medium mb-1">{name}</h1>
            <p className="text-sm font-medium pt-1 pb-0">Vehicle ID: {_id}</p>
            <p className="leading-relaxed text-justify">{description}</p>
            <p className="leading-relaxed text-lg font-medium">
              Stock: {quantity}
            </p>
            <p className="leading-relaxed font-medium">Supplier: {supplier}</p>
            <div className="flex border-b-2 pb-2 mb-3">
              <span className="title-font font-medium text-2xl">{price}</span>
              <button className="flex ml-auto bg-[#DDFBEC] text-[#186340] border-1 border-[#186340] rounded px-6 py-2 hover:text-[#DDFBEC] hover:bg-[#186340]">
                Delivered
              </button>
            </div>
            <div className="flex align-middle">
              <p className="font-bold text-xl w-full mr-1 my-auto">Add Stock</p>
              <input
                className="mr-2 w-full text-xl font-semibold text-center rounded text-[#186340] border-1 border-[#186340]"
                type="number"
                name="quantity"
                id=""
              />
              <button className="w-full bg-[#DDFBEC] text-[#186340] border-1 border-[#186340] rounded px-2 py-2 hover:text-[#DDFBEC] hover:bg-[#186340]">
                Stock Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageItem;
