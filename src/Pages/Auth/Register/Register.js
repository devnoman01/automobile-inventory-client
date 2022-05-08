import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../../../Components/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  console.log(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  let errorElement;

  const handleRegister = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    navigate("/home");
    toast.success("Registration complete");
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto px-3 my-auto">
      <div className="login-form-parent bg-[#F9F9F9] border rounded-lg shadow-md p-4 mx-auto text-center">
        <ion-icon name="person-circle-outline"></ion-icon>

        <h1 className="text-center mt-3 mb-5">Please Register</h1>
        <form onSubmit={handleRegister} className="login-form">
          <label htmlFor="name">Enter Full Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-3"
          />
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
            required
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-3"
          />
          <div>
            <input
              onClick={() => setAgree(!agree)}
              className="me-2"
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label
              className={agree ? "text-primary" : "text-danger"}
              htmlFor="terms"
            >
              Accept Terms and Conditions
            </label>
          </div>
          <br />
          {errorElement}
          <input
            disabled={!agree}
            className={`${
              !agree ? "bg-gray-400" : "bg-gray-600"
            } w-full mb-4 py-2 text-white font-medium`}
            type="submit"
            value="Register"
          />
          <p className="text-lg">
            Already have an account?{" "}
            <Link to="/login" className="no-underline text-primary font-medium">
              Login Here
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

export default Register;
