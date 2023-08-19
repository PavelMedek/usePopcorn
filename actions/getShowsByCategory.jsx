import { getShowsByPlatform } from "./getShowsByPlatform";

const getShowsByCategory = (platformName, categoryName) => {
  const shows = getShowsByPlatform(platformName);

  if (!shows || shows.length === 0) {
    return null;
  }

  const showsInSelectedCategory =
    categoryName === "Vše"
      ? shows
      : shows.filter((serie) => serie.categories.includes(categoryName));

  if (!showsInSelectedCategory || showsInSelectedCategory.length === 0) {
    return null;
  }

  return showsInSelectedCategory;
};

export default getShowsByCategory;
