import Image from "next/image";
import Link from "next/link";
import React from "react";

const EpisodeItem = ({ platform, episode }) => {
  return (
    <Link
      href={`${platform}/episoda/${episode.slug}`}
      className="flex items-center gap-6 py-5 px-3 hover:bg-[#1A161E] lg:flex-col lg:items-start first:bg-[#1A161E]"
    >
      <div className="w-12 lg:hidden">
        <span className="text-3xl">{episode.episode}</span>
      </div>
      <Image src={episode.thumbnail} width={100} height={50} alt="fdsad" />
      <div className="flex flex-col justify-between w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">
            <span className="hidden lg:inline-block">{episode.episode}.</span>{" "}
            {episode.name}
          </h2>
          <span>{episode.length} min</span>
        </div>
        <p className="text-[#989898] font-light">{episode.desc}</p>
      </div>
    </Link>
  );
};

export default EpisodeItem;
