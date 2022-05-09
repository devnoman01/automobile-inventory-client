import React from "react";
import { useNavigate } from "react-router-dom";
import useVehicles from "../../../Hooks/useVehicles";
import InventoryItemCard from "../InventoryItemCard/InventoryItemCard";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [products, setProducts] = useVehicles();
  const navigate = useNavigate();

  const navigateAddItem = () => {
    navigate("/addItem");
  };

  return (
    <div className="w-full h-full bg-gray-100">
      <div className="container py-5">
        <h1 className="text-center mb-5">Manage Inventories</h1>
        <div className="row pb-2 px-1 border-b-2 mb-4 mx-auto">
          <div className="col-lg-4 col-sm-12 mb-2 text-center">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search inventory item"
                aria-label="Search inventory item"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-success"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mb-2 text-center">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Sort by</option>
              <option value="1">Name</option>
              <option value="2">Price</option>
              <option value="3">Date</option>
              <option value="4">Stock</option>
              <option value="5">Category</option>
            </select>
          </div>
          <div className="col-lg-2 col-sm-12 mb-2 text-center">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Sort method</option>
              <option value="1">Ascending</option>
              <option value="2">Descending</option>
            </select>
          </div>
          <div className="col-lg-auto col-sm-12 mb-2 text-center">
            <button
              onClick={() => navigateAddItem()}
              className="btn btn-success add-item-button"
            >
              Add New Inventory Item
            </button>
          </div>
        </div>

        <div className="inventory-item-parent w-full">
          {products.map((product) => (
            <InventoryItemCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
