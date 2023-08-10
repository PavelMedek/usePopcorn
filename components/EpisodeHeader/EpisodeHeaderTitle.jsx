import React from "react";

const EpisodeHeaderTitle = ({ title, showTitle, season, episode }) => {
  const seasonNumber = season < 10 ? `0${season}` : season;
  const episodeNumber = episode < 10 ? `0${episode}` : episode;

  return (
    <div className="flex flex-col gap-1">
      <p className="uppercase">
        {showTitle} - S{seasonNumber}E{episodeNumber}{" "}
      </p>
      <p className="text-6xl font-semibold uppercase">{title}</p>
    </div>
  );
};

export default EpisodeHeaderTitle;
