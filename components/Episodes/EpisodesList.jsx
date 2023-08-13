import Image from "next/image";
import Link from "next/link";
import React from "react";
import EpisodeItem from "./EpisodeItem";

const EpisodesList = ({ filteredEpisodes, platform }) => {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        {filteredEpisodes.map((episode) => (
          <EpisodeItem
            episode={episode}
            platform={platform}
            key={episode.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default EpisodesList;
