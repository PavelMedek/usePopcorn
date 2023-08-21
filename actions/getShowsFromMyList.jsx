function getShowsFromMyList(myList, series, endIdx = series.length) {
  const selectedSlugs = myList?.map((item) => item.slug) || [];

  const shows = [];

  for (const slug of selectedSlugs) {
    const show = series.find((item) => item.slug === slug);
    if (show) {
      shows.push(show);
    }
  }

  // Apply optional slice
  const slicedShows = shows.slice(0, endIdx);

  return slicedShows;
}

export default getShowsFromMyList;
