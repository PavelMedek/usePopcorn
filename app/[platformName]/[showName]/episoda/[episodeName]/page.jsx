"use client";

import { platforms } from "@/lib/data";
import React from "react";

const EpisodePage = ({ params }) => {
  const showName = params.showName;
  const episodeName = params.episodeName;

  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform?.series?.find((el) => el.slug === showName);
  const episode = show?.episodes.find((el) => el.slug === episodeName);

  if (!episode) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase w-full p-16 md:py-16 md:px-5 gap-10">
        <p>No Episode</p>
        <button
          onClick={() => router.back()}
          className="bg-blue-500 py-4 w-36 rounded-md font-bold text-lg text-center uppercase sm:py-2"
        >
          Back
        </button>
      </div>
    );
  }

  return <div>{episode.name}</div>;
};

export default EpisodePage;
