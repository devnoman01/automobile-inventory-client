import React from "react";
import "./CoreFeatures.css";

const CoreFeatures = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 md:py-30 py-12 mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-heading text-center">Awesome CRUD Features</h1>
          <p className="crud-feature-subheading leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto px-3 text-gray-500s">
            Create, Read, Update and Delete is the core feature of any inventory
            system. Automobile Inventory helps users to handle CRUD operation in
            very easily.
          </p>
          <div className="flex mt-4 justify-center">
            <div className="w-28 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="crud-feature-card p-4 lg:w-1/4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 svg-div flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-medium mb-3">Create Data</h2>
              <p className="leading-relaxed text-base">
                Simply create and add new data very easily with specific input
                field that helps user storing their data.
              </p>
            </div>
          </div>
          <div className="crud-feature-card p-4 lg:w-1/4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 svg-div flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-medium mb-3">Read Data</h2>
              <p className="leading-relaxed text-base">
                Parse previously stored data form database very easily and use
                those data anywhere as you need.
              </p>
            </div>
          </div>
          <div className="crud-feature-card p-4 lg:w-1/4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 svg-div flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-medium mb-3">Update Data</h2>
              <p className="leading-relaxed text-base">
                As users add data and use them, users may modify and update
                those data whenever they need.
              </p>
            </div>
          </div>
          <div className="crud-feature-card p-4 lg:w-1/4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 svg-div flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-medium mb-3">Delete Data</h2>
              <p className="leading-relaxed text-base">
                Allows user delete unnecessary data from database while saving
                storage and increase performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
