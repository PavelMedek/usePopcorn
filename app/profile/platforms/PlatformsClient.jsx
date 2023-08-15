import Image from "next/image";
import React from "react";

const PlatformsClient = ({ platforms }) => {
  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <div className="flex justify-between items-center">
        <h1 className="uppercase text-5xl">Platforms</h1>
        <button className="bg-blue-500 py-4 px-6 rounded-md font-bold text-lg text-center uppercase sm:py-2">
          + ADD
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {platforms.map((platform, index) => (
          <div key={index}>
            <div className="flex justify-between items-center bg-[#1A161E] py-3 px-5">
              <div className="flex gap-5 items-center">
                <Image
                  src={platform.image}
                  width={50}
                  height={50}
                  alt={platform.name}
                />
                <p>{platform.name}</p>
              </div>
              <div className="flex gap-5">
                <button>Add</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformsClient;
