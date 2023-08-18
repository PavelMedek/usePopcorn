import { platforms, series } from "@/lib/test-data";

export const getShowsByPlatform = (platformName) => {
  const foundPlatform = platforms?.find(
    (platform) => platform.name === platformName
  )?.series;

  if (!foundPlatform) {
    return null;
  }

  const filteredSeries = series?.filter((item) => {
    return foundPlatform?.some(
      (selectedSlug) => selectedSlug.slug === item.slug
    );
  });

  return filteredSeries;
};
