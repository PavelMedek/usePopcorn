const getTotalSeasonsAndEpisodes = (episodes) => {
  if (!episodes || episodes.length === 0) {
    return { totalSeasons: 0, totalEpisodes: 0 };
  }

  const totalSeasons = Math.max(...episodes.map((episode) => episode.season));
  const totalEpisodes = episodes.length;
  return { totalSeasons, totalEpisodes };
};

export default getTotalSeasonsAndEpisodes;
