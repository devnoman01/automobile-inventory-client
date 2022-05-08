import React from "react";

import Footer from "../../../Components/Footer/Footer";
import AuthenticationFeatures from "../AuthenticationFeatures/AuthenticationFeatures";
import Banner from "../Banner/Banner";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import FeaturedInventoryItems from "../FeaturedInventoryItems/FeaturedInventoryItems";
import Statistics from "../Statistics/Statistics";
import ContactUs from "../ContactUs/ContactUs";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <>
      {/* banner part */}
      <Banner />

      {/* featured inventory items part */}
      <FeaturedInventoryItems />

      {/* core features part (extra-1) */}
      <CoreFeatures />

      {/* authentication features part (extra-2) */}
      <AuthenticationFeatures />

      {/* why choose us part (extra-3) */}
      <WhyUs />

      {/* statistics part (extra-4) */}
      <Statistics />

      {/* contact part (extra-5) */}
      <ContactUs />

      {/* footer part */}
      <Footer />
    </>
  );
};

export default Home;
