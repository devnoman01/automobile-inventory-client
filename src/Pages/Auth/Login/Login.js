import React, { useRef, useState } from "react";
import "./Login.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../../../Components/Loading/Loading";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/home";
  let errorElement;

  const emailRef = useRef("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
    toast.success("Login successful");
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(auth, email).then(() =>
        toast.success("Password Reset Email Sent")
      );
    } else {
      toast.error("Please Enter Your Email Address");
    }
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto px-3 my-auto">
      <div className="login-form-parent bg-[#F9F9F9] border rounded-lg shadow-md p-4 mx-auto text-center">
        <ion-icon name="person-circle-outline"></ion-icon>

        <h1 className="text-center mt-3 mb-5">Please Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email">Enter email</label>
          <input
            required
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-3"
          />
          <label htmlFor="password">Enter password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-3"
          />
          <br />
          {errorElement}
          <input
            className="w-full mb-4 py-2 bg-gray-600 text-white font-medium"
            type="submit"
            value="Login"
          />

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
        <p className="text-lg forgot-password-text">
          Forgot Password?{" "}
          <button
            onClick={handleResetPassword}
            className="text-primary font-medium"
          >
            Reset Password
          </button>
        </p>
      </div>
      <div className="pb-5">
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
