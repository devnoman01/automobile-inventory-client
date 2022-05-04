import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let [open, setOpen] = useState(false);
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  return (
    <header className="sticky-top bg-[#D8F0FF]">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container-fluid">
            <Link
              className="navbar-brand d-flex align-items-center gap-1"
              to="/"
            >
              <ion-icon className="logo" name="logo-buffer"></ion-icon>
              <span className="fs-6 fw-bold my-0">
                <span className="m-0">Automobile</span>
                <br />
                Inventory
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark font-medium menu-link"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark font-medium menu-link"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark font-medium menu-link"
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link
                    className="nav-link text-dark font-medium menu-link"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <Link to="/login" className="btn btn-dark">
                  Login
                </Link>
              </ul>
              {/* 
              <form className="">
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="btn primary-button"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link to="/login" className="btn primary-button">
                    Login
                  </Link>
                )}
              </form>
               */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
