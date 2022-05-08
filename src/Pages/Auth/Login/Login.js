import React, { useState } from "react";
import "./Login.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto px-3 my-auto">
      <div className="login-form-parent bg-[#F9F9F9] border rounded-lg shadow-md p-4 mx-auto text-center">
        <ion-icon name="person-circle-outline"></ion-icon>

        <h1 className="text-center mt-3 mb-5">Please Login</h1>
        <form className="login-form">
          <label htmlFor="email">Enter email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-3"
          />
          <label htmlFor="passowrd">Enter password</label>
          <input
            required
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-3"
          />
          <br />
          <p>{error}</p>
          <input
            className="w-full mb-4 py-2 bg-gray-600 text-white font-medium"
            type="submit"
            value="Login"
          />
          <p className="text-lg">
            Forgot Password?{" "}
            <span className="text-primary font-medium">Reset Password</span>
          </p>
          <p className="text-lg">
            New User?{" "}
            <Link
              to="/register"
              className="no-underline text-primary font-medium"
            >
              Register Here
            </Link>
          </p>
        </form>
      </div>
      <div className="pb-5">
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
