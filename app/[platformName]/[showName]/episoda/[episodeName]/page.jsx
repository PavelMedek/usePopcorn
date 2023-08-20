"use client";

import getEpisodes from "@/actions/getEpisodes";
import getShow from "@/actions/getShow";
import getEpisode from "@/actions/getEpisode";

import EpisodeClient from "./EpisodeClient";
import NotFound from "@/components/NotFound";

const EpisodePage = ({ params }) => {
  const { platformName, showName, episodeName } = params;

  const episode = getEpisode(platformName, showName, episodeName);
  const show = getShow(platformName, showName);
  const episodes = getEpisodes(show?.episodes);

  if (!episode) {
    return <NotFound type="EPISODE" />;
  }

  return <EpisodeClient episode={episode} show={show} episodes={episodes} />;
};

export default EpisodePage;
