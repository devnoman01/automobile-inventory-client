import React from "react";

import Footer from "../../../Components/Footer/Footer";
import Banner from "../Banner/Banner";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import FeaturedInventoryItems from "../FeaturedInventoryItems/FeaturedInventoryItems";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedInventoryItems />
      <CoreFeatures />
      <Footer />
    </>
  );
};

export default Home;
