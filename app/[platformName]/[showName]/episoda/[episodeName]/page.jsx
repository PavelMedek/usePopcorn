import { platforms } from "@/lib/data";

import EpisodeClient from "./EpisodeClient";
import NotFound from "@/components/NotFound";

const EpisodePage = ({ params }) => {
  const showName = params.showName;
  const episodeName = params.episodeName;

  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform?.series?.find((el) => el.slug === showName);
  const episode = show?.episodes.find((el) => el.slug === episodeName);

  if (!episode) {
    return <NotFound type="EPISODE" />;
  }

  return <EpisodeClient episode={episode} show={show} />;
};

export default EpisodePage;
