import React from "react";
import "./Statistics.css";

const Statistics = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="container px-3 py-16 mx-auto">
        <h1 className="text-center mb-16 section-heading">Statistics</h1>
        <div className="statistic-card-parent">
          <div className="w-full rounded-xl bg-[#fff] shadow-md p-4 flex flex-col text-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#EF4444]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
            <div className="flex-grow mt-3 text-center mx-auto">
              <h2 className="text-4xl font-medium mb-3">3.7M</h2>
              <p className="text-base text-center font-medium text-[#818181]">
                DATA ITEMS
              </p>
            </div>
          </div>
          <div className="w-full rounded-xl bg-[#fff] shadow-md p-4 flex flex-col text-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#EF4444]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <div className="flex-grow mt-3">
              <h2 className="text-4xl font-medium mb-3">3.2K</h2>
              <p className="text-base font-medium text-[#818181]">DOWNLOADS</p>
            </div>
          </div>
          <div className="w-full rounded-xl bg-[#fff] shadow-md p-4 flex flex-col text-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#EF4444]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="flex-grow mt-3">
              <h2 className="text-4xl font-medium mb-3">4.5K</h2>
              <p className="text-base font-medium text-[#818181]">
                SUBSCRIBERS
              </p>
            </div>
          </div>
          <div className="w-full rounded-xl bg-[#fff] shadow-md p-4 flex flex-col text-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#EF4444]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div className="flex-grow mt-3">
              <h2 className="text-4xl font-medium mb-3">2.5K</h2>
              <p className="text-base font-medium text-[#818181]">USERS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
