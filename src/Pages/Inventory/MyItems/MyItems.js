import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useVehicles from "../../../Hooks/useVehicles";
import InventoryItemCard from "../InventoryItemCard/InventoryItemCard";
const axios = require("axios").default;

const MyItems = () => {
  //   const [products, setProducts] = useVehicles();
  const [userItems, setUserItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user.email;
      const url = `https://pacific-earth-34282.herokuapp.com/myItem?email=${email}`;
      const { data } = await axios.get(url);
      setUserItems(data);
    };
    getMyItems();
  }, [user]);

  return (
    <div className="container px-3 py-5">
      <h1 className="text-center mb-4">My Items</h1>
      {userItems.map((product) => (
        <InventoryItemCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default MyItems;
