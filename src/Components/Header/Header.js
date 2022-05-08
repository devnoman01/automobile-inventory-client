import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = (event) => {
    event.preventDefault();
    signOut(auth);
    toast.info("Signed out!");
  };

  return (
    <header className="bg-[#FEE2E2]">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid nav-div">
            <Link
              className="navbar-brand d-flex align-items-center gap-1"
              to="/"
            >
              <ion-icon className="logo" name="logo-buffer"></ion-icon>
              <span className="brand-text my-0">
                <span className="m-0">Automobile Inventory</span>
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
                    className="nav-link text-dark hover:text-[#DC2626] font-medium menu-link"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark font-medium menu-link"
                    to="/manageInventories"
                  >
                    Manage Inventories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark font-medium menu-link"
                    to="/manageItems"
                  >
                    Manage Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark font-medium menu-link"
                    to="/addItems"
                  >
                    Add Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark font-medium menu-link"
                    to="/myItems"
                  >
                    My Items
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
                <li className="nav-item">
                  <form className="">
                    {user ? (
                      <button
                        // onClick={handleSignOut}
                        className="btn btn-danger"
                      >
                        Sign out
                      </button>
                    ) : (
                      <Link to="/login" className="btn primary-button">
                        Login
                      </Link>
                    )}
                  </form>
                </li>
              </ul>
              {/* 
              
               */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
