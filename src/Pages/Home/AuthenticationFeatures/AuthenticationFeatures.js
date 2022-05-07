import React from "react";
import "./AuthenticationFeatures.css";

const AuthenticationFeatures = () => {
  return (
    <section className="body-font">
      <div className="container px-4 py-24 mx-auto flex flex-wrap">
        <div className="mx-auto text-center mb-12 auth-feature-heading-div">
          {/*
                    section title 
          */}
          <h1 className="section-heading mb-8 text-center">
            Secure Authentication
          </h1>

          {/*
                    section subtitle
          */}

          <p className="leading-relaxed xl:w-3/4 lg:w-3/4 md:w-2/3 sm mx-auto text-gray-500s">
            Secure authentication system keeps information providing secure user
            experience
          </p>
          <div className="flex mt-4 justify-center">
            <div className="w-28 h-1 rounded-full bg-[#DC2626] inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6">
            {/* 
                    register part
            */}

            <div className="flex relative auth-feature-items">
              <div className="h-full w-14 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#DC2626] inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                {/*
                        register part title
                */}
                <h2 className="font-medium title-font text-xl mb-1 tracking-wider">
                  Register
                </h2>
                {/*
                        register part description
                */}
                <p className="leading-relaxed text-justify text-[#818181]">
                  Register to become an user is easier than ever. Just provide
                  your name, email and password. That's what you need to
                  register to use our inventory.
                </p>
              </div>
            </div>
            {/*
                    login part
            */}
            <div className="flex relative auth-feature-items">
              <div className="h-full w-14 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#DC2626] inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                {/*
                        login part title
                */}
                <h2 className="font-medium title-font text-xl mb-1 tracking-wider">
                  Login
                </h2>
                {/*
                        login part description
                */}
                <p className="leading-relaxed text-justify">
                  Use register email address and password or use one click
                  social login method, accessing your own account easier, faster
                  and more secure than ever.
                </p>
              </div>
            </div>
            {/*
                    email verification part
            */}
            <div className="flex relative auth-feature-items">
              <div className="h-full w-14 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#DC2626] inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                {/*
                        email verification part title
                */}
                <h2 className="font-medium title-font text-xl mb-1 tracking-wider">
                  Email verification
                </h2>
                {/*
                        email verification part description
                */}
                <p className="leading-relaxed text-justify">
                  After register, every user must verify themselves as we are
                  concerned about our users and we make sure that every user is
                  real and verified. Once verified, you are ready to access all
                  the facilities.
                </p>
              </div>
            </div>
            {/*
                    reset Password part
            */}
            <div className="flex relative auth-feature-items">
              <div className="h-full w-14 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#DC2626] inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                {/*
                        reset Password part title
                */}
                <h2 className="font-medium title-font text-xl mb-1 tracking-wider">
                  Reset Password
                </h2>
                {/* 
                        reset Password part description
                */}
                <p className="leading-relaxed text-justify">
                  Forgot your password? Don't worry at all. Just use your email
                  to confirm reset password, click the link in your mail to
                  reset password and you are good to go.
                </p>
              </div>
            </div>
            {/*
                    log out part
            */}
            <div className="flex relative auth-feature-items">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#DC2626] inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                {/*
                        log out part title
                */}
                <h2 className="font-medium title-font text-xl mb-1 tracking-wider">
                  Log out
                </h2>
                {/*
                        log out part description
                */}
                <p className="leading-relaxed text-justify">
                  Leaving for a while or taking a nap? Make sure to log out from
                  your user account with just one click and don't worry about
                  unauthorized access.
                </p>
              </div>
            </div>
          </div>
          {/*
                phone image part
          */}
          <div className="lg:w-1/2 md:w-1/2 img-div">
            <img
              className="phone-img rounded-lg md:mt-0 mt-12"
              src="https://i.ibb.co/m4s0wNq/mobile-black.png"
              alt="step"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationFeatures;
