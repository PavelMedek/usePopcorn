import React from "react";

const ShowHeaderImage = ({ thumbnail }) => {
  return (
    <div
      style={{ backgroundImage: `url(${thumbnail})` }}
      className="h-[40rem] w-full bg-center bg-cover md:-z-10"
    >
      <div className="bg-gradient-to-b from-transparent to-[#0D0C0F] w-full h-full"></div>
    </div>
  );
};

export default ShowHeaderImage;
