"use client";

import { platforms } from "@/lib/data";
import React from "react";

const page = ({ params }) => {
  const showName = params.showName;

  const platformWithShow = platforms.find((platform) =>
    platform.series.some((series) => series.slug === showName)
  );

  if (!platformWithShow) {
    return <div>Show not found</div>;
  }

  // Find the specific show details
  const show = platformWithShow.series.find(
    (series) => series.slug === showName
  );

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <h1 className="uppercase text-5xl">Add Episode</h1>

      <div className="">
        <form className="flex flex-col gap-5">
          <div className="flex flex-col w-1/2 md:w-full">
            <label>Cover</label>
            <input
              type="file"
              className="py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800"
            />
          </div>

          <div className="flex gap-5 md:flex-col">
            <div className="flex flex-col w-full">
              <label>Name</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full">
              <label>Release</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full">
              <label>Season</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full">
              <label>Episode</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full">
              <label>lenght</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-5 md:flex-col">
            <div className="flex flex-col w-full">
              <label>Category 1</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full">
              <label>Category 2</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full">
              <label>Category 3</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label>description</label>
            <textarea
              className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              rows="10"
            ></textarea>
          </div>

          <div className="flex gap-5 md:flex-col">
            <div className="flex flex-col w-full">
              <label>Cast 1</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full">
              <label>Cast 2</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full">
              <label>Cast 3</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-5 md:flex-col">
            <div className="flex flex-col w-full">
              <label>Cast 4</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full">
              <label>Cast 5</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full">
              <label>Cast 6</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-5 md:flex-col">
            <div className="flex flex-col w-full">
              <label>Video</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full">
              <label>Trailer</label>
              <input
                type="text"
                className="py-2 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col w-1/2 md:w-full">
            <label>Image</label>
            <input
              type="file"
              className="py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
