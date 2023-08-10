import React from "react";
import EpisodeHeaderImage from "./EpisodeHeaderImage";
import EpisodeHeaderTitle from "./EpisodeHeaderTitle";
import EpisodeHeaderCategories from "./EpisodeHeaderCategories";
import EpisodeHeaderStats from "./EpisodeHeaderStats";

const EpisodeHeader = ({ episode, showTitle }) => {
  return (
    <>
      <EpisodeHeaderImage cover={episode.cover} />
      <div className="w-full flex flex-col p-16 md:py-16 md:px-5 mt-[-340px] gap-3">
        <EpisodeHeaderTitle
          title={episode.name}
          showTitle={showTitle}
          season={episode.season}
          episode={episode.episode}
        />
        <EpisodeHeaderCategories categories={episode.categories} />
        <EpisodeHeaderStats release={episode.release} length={episode.length} />
      </div>
    </>
  );
};

export default EpisodeHeader;
