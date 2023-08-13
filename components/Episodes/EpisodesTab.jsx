"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Heading from "../Heading";
import SeasonSwitcher from "./SeasonSwitcher";
import EpisodesList from "./EpisodesList";

const EpisodesTab = ({ episodes, platform }) => {
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
    return (
      <div className="flex flex-col items-center gap-5 justify-center w-full">
        <h1 className="text-5xl uppercase font-bold">
          Nebyly nalezeny žádné epizody
        </h1>
        <Image
          src="/images/Oops! 404 Error with a broken robot-cuate.svg"
          width={300}
          height={300}
          alt="not found"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center ">
        <Heading text="Epizody" />
        <SeasonSwitcher
          handleSeasonChange={handleSeasonChange}
          seasons={seasons}
          selectedSeason={selectedSeason}
        />
      </div>
      <EpisodesList filteredEpisodes={filteredEpisodes} platform={platform} />
    </div>
  );
};

export default EpisodesTab;
