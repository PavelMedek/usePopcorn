import React from "react";
import AddToMyListButton from "./AddToMyListButton";

const ShowHeaderTitle = ({ title }) => {
  return (
    <div className="flex justify-between md:flex-col md:gap-1">
      <p className="text-6xl font-semibold uppercase">{title}</p>
      <AddToMyListButton />
    </div>
  );
};

export default ShowHeaderTitle;
