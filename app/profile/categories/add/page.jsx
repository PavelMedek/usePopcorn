import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <h1 className="uppercase text-5xl">Add Category</h1>

      <div className="w-1/2 md:w-full">
        <form className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="icon" className="text-white">
              Name
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
