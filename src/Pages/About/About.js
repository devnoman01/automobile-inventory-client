import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <div className="container mx-auto my-5">
          <div className="row text-center">
            <h1 className="my-4">About Me</h1>
            <div className="col-md-6 col-12-12 mx-auto">
              <img
                className="w-50 mx-auto"
                src="https://avatars.githubusercontent.com/u/67538033"
                alt=""
              />
            </div>
            {/* my profile information */}
            <div className="my-4">
              <h3 className="my-1">Md. Abdullah Al Noman</h3>
              <p>CS Engineer, Tech Enthusiast</p>
            </div>
            {/* my mission information */}
            <div>
              <h3 className="my-4">My Mission</h3>
              <div className="col-md-8 col-12-12 mx-auto p-3">
                <p style={{ textAlign: "justify" }}>
                  I am very interested and passionate about web and software
                  technologies. I have studied Computer Science and Engineering.
                  I'm developing my Web Development knowledge with Programming
                  Hero Team and I'm trying to be a Fullstack Web Developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
