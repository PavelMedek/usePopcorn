const geForYouList = (series, forYou, maxToShow = series.length) => {
  const filteredSeries = series.filter((show) =>
    show.categories.some((category) => forYou?.includes(category))
  );

  if (maxToShow) {
    return filteredSeries.slice(0, maxToShow);
  }

  return filteredSeries;
};

export default geForYouList;
