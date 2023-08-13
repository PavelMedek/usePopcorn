import React from "react";
import Heading from "../Heading";

const Description = ({ desc }) => {
  return (
    <div className="w-1/2 md:w-full">
      <Heading text="popis" className="mb-3" />
      <p>{desc}</p>
    </div>
  );
};

export default Description;
