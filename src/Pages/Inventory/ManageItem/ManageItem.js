import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";

const ManageItem = () => {
  const [products, setProducts] = useProducts();
  const { id } = useParams();

  return (
    <div className="container py-4">
      <h1 className="text-center">Manage Inventory Item</h1>
      <div></div>
    </div>
  );
};

export default ManageItem;
