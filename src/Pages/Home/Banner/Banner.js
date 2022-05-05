import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    //   hero section banner
    <div className="w-full">
      <div className="container">
        <div className="row py-5">
          {/* half width with title description and button */}
          <div className="col-md-6 col-sm-12 banner my-auto">
            <h1>
              Organize Business With{" "}
              <span className="text-[#DC2626]">Automobile Inventory</span>
            </h1>
            <p className="my-4">
              Grow faster and get the best out of your automobile business with
              automobile inventory specially developed for dealers and showroom
              owners.
            </p>
            <button className="btn btn-danger mx-auto">Learn More</button>
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
