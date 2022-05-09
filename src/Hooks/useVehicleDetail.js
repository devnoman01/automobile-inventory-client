import React, { useEffect, useState } from "react";

const useVehicleDetail = (vehicleId) => {
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    const url = `https://pacific-earth-34282.herokuapp.com/vehicle/${vehicleId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVehicle(data);
      });
  }, [vehicleId, vehicle]);

  return [vehicle, setVehicle];
};

export default useVehicleDetail;
