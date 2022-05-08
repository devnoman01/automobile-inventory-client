import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

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
          //   onClick={() => signInWithGoogle()}
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
