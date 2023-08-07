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

  return (
    <div>
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
        <ul>
          {filteredEpisodes.map((episode) => (
            <li key={episode.name}>
              {episode.name} (Season {episode.season}, Episode {episode.episode}
              )
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EpisodesTab;
