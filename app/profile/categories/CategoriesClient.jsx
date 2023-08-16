import React from "react";

const CategoriesClient = ({ allCategories }) => {
  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <div className="flex justify-between items-center md:flex-col md:items-start gap-5">
        <h1 className="uppercase text-5xl">Categories</h1>
        <button className="bg-blue-500 py-4 px-6 rounded-md font-bold text-lg text-center uppercase sm:py-2 md:w-full">
          + ADD
        </button>
      </div>
      <ul className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-4 gap-3">
        {allCategories.map((category, index) => (
          <li className="bg-[#1A161E] p-3 " key={index}>
            <div className="flex justify-between">
              <p>{category}</p>
              <button>delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesClient;
