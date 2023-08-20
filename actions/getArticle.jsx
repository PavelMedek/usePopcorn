import { platforms, series, articles } from "@/lib/test-data";

const getArticle = (platformName, showName, articleName) => {
  const findPlatform = (platforms, platformName) => {
    return platforms.find((platform) => platform.name === platformName);
  };

  const findSeries = (series, platformName) => {
    return series.filter((serie) => serie.platformSlug === platformName);
  };

  const findShow = (seriesOnPlatform, showName) => {
    return seriesOnPlatform.find((serie) => serie.slug === showName);
  };

  const findArticle = (articles, showSlug, articleName) => {
    return articles.find(
      (ep) => ep.showSlug === showSlug && ep.slug === articleName
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

  const article = findArticle(articles, show.slug, articleName);

  if (!article) {
    return null;
  }

  return article;
};

export default getArticle;
