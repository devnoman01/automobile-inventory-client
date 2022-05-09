import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./InventoryItemCard.css";

const InventoryItemCard = ({ product }) => {
  const { image, name, _id, category, quantity, supplier, price } = product;
  const navigate = useNavigate();
  // dynamic route navigation
  const navigateToVehicletDetail = (_id) => {
    navigate(`/inventory/${_id}`);
  };

  const handleItemDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete item?");
    if (proceed) {
      console.log("deleting user with id:", id);
      const url = `http://localhost:5000/vehicle/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Inventory Item Deleted");
        });
    }
  };

  return (
    <div className="inventory-item-card flex items-center border shadow-sm lg:w-full mx-auto px-3 mb-3 bg-white rounded border-gray-100 sm:flex-row flex-col">
      <div className="sm:w-28 sm:h-28 h-2/3 w-2/3 inline-flex items-center justify-center">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <div className="flex-grow px-2 sm:mt-0 inventory-item-card-info">
        <h2 className="text-xl title-font font-medium my-0">{name}</h2>
        <p className="font-medium my-0">ID: {_id}</p>
        <p className="font-medium my-0 inline-block mr-4">
          Category: {category}
        </p>
        <p className="font-medium my-0 inline-block">Stock: {quantity}</p>
        <br />
        <p className="text-sm font-medium my-0 inline-block">
          Dealer : {supplier}
        </p>
        <br />
        <h5 className="text-base font-medium my-0 inline-block">
          Price : <span className="font-bold">$ {price}</span>
        </h5>
      </div>
      <div className="item-card-btn-div">
        {/* <button className="btn btn-success btn-sm mr-1 w-auto d-flex flex-row align-items-center"> */}
        <button
          onClick={() => navigateToVehicletDetail(_id)}
          className="px-1 py-1 rounded bg-[#DDFBEC] text-[#186340] border-1 border-[#186340] mr-1 w-auto d-flex flex-row align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Update
        </button>
        {/* <button className="btn btn-danger btn-sm ml-1 w-auto d-flex flex-row align-items-center"> */}
        <button
          onClick={() => handleItemDelete(_id)}
          className="px-1 py-1 rounded bg-[#fee2e2] text-[#b91c1c] border-1 border-[#b91c1c] ml-1 w-auto d-flex flex-row align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
};

export default InventoryItemCard;
