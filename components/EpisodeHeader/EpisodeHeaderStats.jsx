import React from "react";
import { FaPlay } from "react-icons/fa";

const EpisodeHeaderStats = ({ release, length }) => {
  return (
    <div className="grid sm:grid-cols-1 xl:grid-cols-1 grid-cols-3 gap-5">
      <div className="bg-red-700 flex justify-center items-center aspect-video rounded-xl">
        <FaPlay className="w-8 h-8" />
      </div>
      <div className="bg-[#1A161E] bg-opacity-75 flex justify-start items-center aspect-video rounded-xl">
        <div className="transform -rotate-90">
          <h1 className="text-base uppercase text-[#4C4158]">release</h1>
        </div>
        <p className="text-2xl font-semibold w-full text-center">{release}</p>
      </div>

      <div className="bg-[#1A161E] bg-opacity-75 flex justify-start items-center aspect-video rounded-xl">
        <div className="transform -rotate-90">
          <h1 className="text-base uppercase text-[#4C4158]">Length</h1>
        </div>
        <p className="text-2xl font-semibold w-full text-center">
          {length} min
        </p>
      </div>
    </div>
  );
};

export default EpisodeHeaderStats;
