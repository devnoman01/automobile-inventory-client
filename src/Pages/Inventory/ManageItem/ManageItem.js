import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useVehicleDetail from "../../../Hooks/useVehicleDetail";
import useVehicles from "../../../Hooks/useVehicles";

const ManageItem = () => {
  const { vehicleId } = useParams();
  const [vehicle] = useVehicleDetail(vehicleId);
  const { _id, name, category, description, price, quantity, image, supplier } =
    vehicle;

  return (
    <div class="container px-5 py-24 mx-auto">
      <h1 className="text-center mb-5">Manage/Update Item</h1>
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <img alt="ecommerce" class="img-fluid rounded" src={image} />
        </div>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font tracking-widest">{category}</h2>
          <h1 class="text-3xl title-font font-medium mb-1">{name}</h1>
          <p className="text-sm font-medium pt-1 pb-0">Vehicle ID: {_id}</p>
          <p class="leading-relaxed">{description}</p>
          <p class="leading-relaxed text-lg font-medium">Stock: {quantity}</p>
          <p class="leading-relaxed font-medium">{supplier}</p>

          <div class="flex">
            <span class="title-font font-medium text-2xl">{price}</span>
            <button class="flex ml-auto bg-[#EF4444] text-white rounded px-6 py-2 hover:bg-[#DC2626]">
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
