import React from "react";
import { useNavigate } from "react-router-dom";

const WhyUs = () => {
  const navigate = useNavigate();

  // route navigation
  const navigateToManageInventories = (id) => {
    navigate("/manageInventories");
  };

  return (
    <div className="container px-3 py-3 mx-auto">
      <div className="text-center mb-14">
        <h1 className="section-heading text-center  mb-4">
          Why Choose{" "}
          <span className="text-[#DC2626]">Automobile Inventory</span>
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Think and consider many important part before choosing any product or
          service. Because these might be the reason of your great user
          experience.
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-[#DC2626] w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">
              Unlimited Data Storage
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-[#DC2626] w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Affordable Pricing</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-[#DC2626] w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">
              Experienced Developer Team
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-[#DC2626] w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">
              Industry Standard Security
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-[#DC2626] w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">
              Cross-platform Supported
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-[#DC2626] w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">
              On-demand Live Remote Support
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-[#DC2626] w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">
              24/7 Call/Chat Support
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-[#DC2626] w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">
              Sessional Surprise Offer
            </span>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 mb-20">
        <button
          onClick={() => navigateToManageInventories()}
          className="bg-[#EF4444] text-white rounded px-6 py-2"
        >
          Try Out Now
        </button>
      </div>
    </div>
  );
};

export default WhyUs;
