import React from "react";

const AdminHeading = ({ text, handleClick }) => {
  return (
    <div className="flex justify-between items-center md:flex-col md:items-start gap-5">
      <h1 className="uppercase text-5xl">{text}</h1>
      <button
        className="bg-blue-500 py-4 px-6 rounded-md font-bold text-lg text-center uppercase sm:py-2 md:w-full"
        onClick={handleClick}
      >
        + ADD
      </button>
    </div>
  );
};

export default AdminHeading;
