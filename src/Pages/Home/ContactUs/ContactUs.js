import React, { useState } from "react";
import { toast } from "react-toastify";
import "./ContactUs.css";

const ContactUs = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    // e.target.fullName.value = "";
    // e.target.email.value = "";
    // e.target.message.value = "";
    toast.success("Thanks for your message", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container px-3 py-24">
      <h1 className="text-center mb-16 section-heading">Contact Us</h1>
      <form
        onSubmit={handleContactSubmit}
        className="mx-auto flex flex-wrap items-center"
      >
        <div className="lg:w-1/2 md:w-1/2 contact-half-div">
          <h1 className="title-font font-medium text-xl text-justify">
            Willing to be an user but still confuse about anything? Don't even
            worry and feel free to contact us through any of these medium.
          </h1>
          <p className="leading-relaxed mt-4 text-justify">
            If you are an existing user then you can also send messages from
            here regarding any technical and service related issue.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-1/2 contact-half-div">
          <div className="bg-[#F7F7F7] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-lg font-medium title-font mb-4">
              Send Your Message
            </h2>
            <div className="relative mb-4">
              <label htmlFor="fullName" className="leading-7 text-sm">
                Full Name
              </label>
              <input
                required
                type="text"
                id="fullName"
                name="fullName"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm">
                Your Message
              </label>
              <textarea
                required
                type="text"
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
