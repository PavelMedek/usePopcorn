const getTotalLength = (episodes) => {
  if (!episodes || episodes.length === 0) {
    return { totalHours: 0, remainingMinutes: 0 };
  }

  const totalMinutes = episodes.reduce(
    (acc, episode) => acc + episode.length,
    0
  );
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;
  return { totalHours, remainingMinutes };
};

export default getTotalLength;
