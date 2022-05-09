import React from "react";
import { useState, useEffect } from "react";

const useVehicles = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://pacific-earth-34282.herokuapp.com/vehicle")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return [products, setProducts];
};

export default useVehicles;
