import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const EpisodesTab = ({ episodes }) => {
  const seasons = Array.from(
    new Set(episodes?.map((episode) => episode.season))
  );
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);

  const handleSeasonChange = (event) => {
    setSelectedSeason(parseInt(event.target.value, 10));
  };

  const filteredEpisodes = episodes
    ?.filter((episode) => episode.season === selectedSeason)
    .sort((a, b) => a.episode - b.episode);

  if (!episodes || episodes.length === 0) {
    return <div>No Episodes found!</div>;
  }

  console.log(filteredEpisodes);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl uppercase text-[#4C4158] mb-3">description</h2>
        <select
          className="bg-[#1A161E] text-[#4C4158] p-4"
          onChange={handleSeasonChange}
          value={selectedSeason}
        >
          {seasons.map((season) => (
            <option key={season} value={season}>
              Season {season}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ul className="flex flex-col gap-3">
          {filteredEpisodes.map((episode) => (
            <Link
              href="/"
              key={episode.name}
              className="flex items-center gap-6 py-5 px-3 hover:bg-[#1A161E] lg:flex-col lg:items-start"
            >
              <div className="w-12 lg:hidden">
                <span className="text-3xl">{episode.episode}</span>
              </div>
              <Image
                src={episode.thumbnail}
                width={100}
                height={50}
                alt="fdsad"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl">
                    <span className="hidden lg:inline-block">
                      {episode.episode}.
                    </span>{" "}
                    {episode.name}
                  </h2>
                  <span>{episode.length} min</span>
                </div>
                <p className="text-[#989898] font-light">{episode.desc}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EpisodesTab;
