import React, { useEffect, useState } from "react";

const useVehicleDetail = (vehicleId) => {
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/vehicle/${vehicleId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVehicle(data);
      });
  }, [vehicleId]);

  return [vehicle];
};

export default useVehicleDetail;
