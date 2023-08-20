import { platforms, series } from "@/lib/test-data";

const getShow = (platformName, showSlug) => {
  const platform = platforms.find((p) => p.name === platformName);

  // Find the series object
  const show = series.find(
    (s) => s.platformSlug === platformName && s.slug === showSlug
  );

  if (!platform || !show) {
    return null;
  }

  return show;
};

export default getShow;
