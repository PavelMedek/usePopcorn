import React from "react";

const AddPage = () => {
  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <h1 className="uppercase text-5xl">Add Platform</h1>

      <div className="w-1/2 md:w-full">
        <form className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="icon" className="text-white">
              Icon
            </label>
            <input
              type="file"
              className="py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800"
            />
          </div>

          <div className="flex flex-col">
            <label>Cover</label>
            <input
              type="file"
              className="py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800"
            />
          </div>

          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label>Color in Hex</label>
            <input
              type="text"
              className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
