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
      const url = `http://localhost:5000/myItem?email=${email}`;
      const { data } = await axios.get(url);
      setUserItems(data);
    };
    getMyItems();
  }, [user]);

  return (
    <div>
      {userItems.map((item) => (
        <li key={item._id}>{item.name}</li>
      ))}
    </div>
  );
};

export default MyItems;
