import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    //   hero section banner
    <div className="w-full banner-bg">
      <div className="container">
        <div className="row banner-row">
          {/* half width with title description and button */}
          <div className="col-md-6 col-sm-12 banner my-auto">
            <h1>
              Organize Business With{" "}
              <span className="text-[#EF4444]">Automobile Inventory</span>
            </h1>
            <p className="my-4">
              Grow faster and get the best out of your automobile business with
              automobile inventory specially developed for dealers and showroom
              owners.
            </p>
            <button className="bg-[#EF4444] text-white rounded px-6 py-2 hover:bg-[#DC2626] no-underline">
              Learn More
            </button>
          </div>
          {/* half width with the image */}
          <div className="col-md-6 col-sm-12 banner-img px-3 my-auto justify-center">
            <img
              className="w-3/4 mx-auto"
              src="https://i.ibb.co/wQq2VkR/banner-img.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
