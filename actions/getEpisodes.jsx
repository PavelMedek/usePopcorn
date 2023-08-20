import { episodes } from "@/lib/test-data";

const getEpisodes = (episodeSlugs) => {
  const filteredEpisodes = episodes.filter((episode) => {
    return episodeSlugs?.some((slugObj) => slugObj.slug === episode.slug);
  });

  return filteredEpisodes;
};

export default getEpisodes;
