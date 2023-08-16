"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ShowClient = ({ show, params }) => {
  const router = useRouter();

  if (!show || !show.episodes) {
    return (
      <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
        <div className="flex justify-between items-center md:flex-col md:items-start gap-5">
          <h1 className="uppercase text-5xl">TV SHOWS</h1>
          <button
            className="bg-blue-500 py-4 px-6 rounded-md font-bold text-lg text-center uppercase sm:py-2 md:w-full"
            onClick={() => router.push(`${params.showName}/add`)}
          >
            + ADD
          </button>
        </div>{" "}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <div className="flex justify-between items-center">
        <h1 className="uppercase text-5xl">TV SHOWS</h1>
        <button
          className="bg-blue-500 py-4 px-6 rounded-md font-bold text-lg text-center uppercase sm:py-2"
          onClick={() => router.push(`${params.showName}/add`)}
        >
          + ADD
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {show.episodes?.map((episode) => (
          <div key={episode.slug}>
            <div className="flex justify-between items-center bg-[#1A161E] py-3 px-5">
              <div className="flex gap-5 items-center">
                <Image
                  src={episode.thumbnail}
                  width={150}
                  height={75}
                  alt={episode.slug}
                />
                <h3>{episode.name}</h3>
              </div>
              <div className="flex gap-5">
                <button>Add Episode</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowClient;
