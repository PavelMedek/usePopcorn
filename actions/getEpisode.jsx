import { platforms, series, episodes } from "@/lib/test-data";

const getEpisode = (platformName, showName, episodeName) => {
  const findPlatform = (platforms, platformName) => {
    return platforms.find((platform) => platform.name === platformName);
  };

  const findSeries = (series, platformName) => {
    return series.filter((serie) => serie.platformSlug === platformName);
  };

  const findShow = (seriesOnPlatform, showName) => {
    return seriesOnPlatform.find((serie) => serie.slug === showName);
  };

  const findEpisode = (episodes, showSlug, episodeName) => {
    return episodes.find(
      (ep) => ep.showSlug === showSlug && ep.slug === episodeName
    );
  };

  const platform = findPlatform(platforms, platformName);

  if (!platform) {
    return null;
  }

  const seriesOnPlatform = findSeries(series, platformName);
  const show = findShow(seriesOnPlatform, showName);

  if (!show) {
    return null;
  }

  const episode = findEpisode(episodes, show.slug, episodeName);

  if (!episode) {
    return null;
  }

  return episode;
};

export default getEpisode;
