import React from "react";

const EpisodeHeaderCategories = ({ categories }) => {
  return (
    <div className="flex flex-row gap-3">
      {categories.map((category) => (
        <div
          key={category}
          className="py-1 px-3 bg-[#0D0C0F]/75 rounded-xl border border-white"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default EpisodeHeaderCategories;
