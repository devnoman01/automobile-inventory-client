import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FeaturedInventoryItem.css";

const FeaturedInventoryItem = ({ product }) => {
  const { _id, name, category, description, image, price, quantity } = product;

  const navigate = useNavigate();

  // dynamic route navigation
  const navigateToVehicletDetail = (_id) => {
    navigate(`/inventory/${_id}`);
  };

  return (
    <div className="border-2 rounded-sm p-4 card-div">
      <div className="row">
        <img src={image} className="object-cover card-image" alt="" />
      </div>
      <div className="row mt-4 card-item-info">
        <p className="font-medium mb-2 text-sm text-[#9A9A9A] card-item-category">
          {category}
        </p>
        <p className="card-item-title">{name}</p>
        <p className="card-item-description text-[#818181]">
          <small>{description}</small>
        </p>
        <p
          className={
            quantity
              ? "font-medium text-[#818181]"
              : "text-[#f87171] font-medium"
          }
        >
          Stock: {quantity ? quantity : `0 (Out of Stock)`}
        </p>
        <p className="font-semibold text-xl text-[#f87171] card-item-price">
          {" "}
          $ {price}
        </p>
      </div>
      <div className="card-button-div mx-auto">
        <button
          onClick={() => navigateToVehicletDetail(_id)}
          className="bg-[#fee2e2] text-[#b91c1c] font-semibold no-underline card-link d-flex rounded py-2 px-6"
        >
          Stock Update
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-auto ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeaturedInventoryItem;
