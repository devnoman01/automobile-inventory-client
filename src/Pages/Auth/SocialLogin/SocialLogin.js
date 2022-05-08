import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  // if redirected to login page then redirect back after login
  if (user) {
    navigate(from, { replace: true });
  }

  // checking any error and updating if needed
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div>
      <div className="d-flex">
        <div className="w-50 border-top mt-3 p-0"></div>
        <p className="px-3 mt-1">or</p>
        <div className="w-50 border-top mt-3 p-0"></div>
      </div>
      {errorElement}
      <div>
        {/* google login button with function */}
        <button
          onClick={() => signInWithGoogle()}
          className="btn border border-2 w-100 d-flex align-items-center justify-content-center gap-2 mx-auto my-3 social-login-button"
        >
          <img
            style={{ width: "30px" }}
            className=""
            src="https://i.ibb.co/Bjc8G1f/google-logo.png"
            alt=""
          />
          Continue with Google
        </button>
        {/* <button
          //   onClick={() => signInWithGithub()}
          className="btn border border-2 w-100 d-flex align-items-center justify-content-center gap-2 mx-auto my-3 social-login-button"
        >
          <img style={{ width: "30px" }} className="" src={github} alt="" />
          Continue with Github
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
