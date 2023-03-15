import React from "react";
import { FaSpinner } from "react-icons/fa";
import "animate.css";

const Spinner = () => {
  return (
    <div className="flex text-center justify-center items-center h-screen">
      <FaSpinner className="text-5xl font-bold" />
    </div>
  );
};

export default Spinner;
