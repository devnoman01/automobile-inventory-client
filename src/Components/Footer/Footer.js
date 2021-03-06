import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FEE2E2]">
      <div className="container footer-container">
        <div className="row">
          {/* branding */}
          <div className="footer-logo col-lg-4 col-md-12 col-sm-12 footer-div">
            <ion-icon name="logo-buffer"></ion-icon>
            <h4 className="mt-2">Automobile Inventory</h4>
            <p className="mt-3 text-sm font-medium text-justify">
              Making easy inventory system for automobile dealers and grow
              better business
            </p>
            <div className="d-flex flex-row social-icon-div">
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faLinkedin}
              />
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faYoutube}
              />
            </div>
          </div>
          {/* features menulist */}
          <div className="col-lg-2 col-md-12 col-sm-12 footer-div">
            <h6 className="">FEATURES</h6>
            <p className="footer-menu-items">Create Data</p>
            <p className="footer-menu-items">Read Data</p>
            <p className="footer-menu-items">Update Data</p>
            <p className="footer-menu-items">Delete Data</p>
          </div>
          {/* support menulist */}
          <div className="col-lg-2 col-md-12 col-sm-12 footer-div">
            <h6 className="">SUPPORT</h6>
            <p className="footer-menu-items">Pricing</p>
            <p className="footer-menu-items">Documentation</p>
            <p className="footer-menu-items">Guides</p>
            <p className="footer-menu-items">Partners</p>
          </div>

          {/* supported payment methods */}
          <div className="col-lg-4 col-md-12 col-sm-12 footer-div payment-div">
            <h6 className="">SUPPORTED PAYMENT METHOD</h6>
            <img src="https://i.ibb.co/7rzKQpQ/payment-methods.png" alt="" />

            {/* <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
            <p className="mt-3 text-sm font-medium lg:text-left md:text-justify text-center">
              Making easy inventory system for automobile dealers and grow
              better business
            </p>
            <form onSubmit={handleSubscribe}>
              <input
                className="form-control lg:w-full mb-2"
                type="email"
                placeholder="Enter your email"
                name=""
                id=""
                required
              />
              <input className="btn btn-dark" type="submit" value="Subscribe" />
            </form> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
