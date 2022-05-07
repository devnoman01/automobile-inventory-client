import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import FeaturedInventoryItem from "../FeaturedInventoryItem/FeaturedInventoryItem";
import "./FeaturedInventoryItems.css";

const FeaturedInventoryItems = () => {
  const [products, setProducts] = useProducts();
  const featuredProducts = products.slice(0, 6);

  const navigate = useNavigate();

  // dynamic route navigation
  const navigateToManageInventories = (id) => {
    navigate("/manageInventories");
  };

  return (
    <div className="">
      <div className="container featured-Inventory-container">
        <h1 className="text-center mb-16 section-heading">
          Sample Inventory Items
        </h1>
        <div className="featured-item-parent-div">
          {featuredProducts.map((product) => (
            <FeaturedInventoryItem key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center my-5">
          <button
            onClick={() => navigateToManageInventories()}
            className="bg-[#EF4444] text-white rounded px-6 py-2"
          >
            Manage Inventories
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInventoryItems;
