import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{ width: "200px", height: "200px" }}
      className="w-100 d-flex text-[#DC2626] justify-content-center align-items-center"
    >
      {/* bootstrap spinner */}
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
