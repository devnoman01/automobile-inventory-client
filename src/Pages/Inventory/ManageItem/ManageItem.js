import React from "react";
import { useParams } from "react-router-dom";

const ManageItem = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Manage Inventories Item</h1>
      <p>Selected item id: {id}</p>
    </div>
  );
};

export default ManageItem;
