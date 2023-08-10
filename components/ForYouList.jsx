"use client";

import { platforms } from "@/lib/data";
import ShowCard from "./ShowCard";

const CustomList = () => {
  const forYou = [
    { platformName: "netflix", slug: "stranger-things" },
    { platformName: "hbomax", slug: "game-of-thrones" },
    { platformName: "primevideo", slug: "the-boys" },
  ];

  const selectedShows = [];

  for (const show of forYou) {
    const platform = platforms.find(
      (platform) => platform.name === show.platformName
    );
    if (platform) {
      const series = platform.series.find(
        (series) => series.slug === show.slug
      );
      if (series) {
        selectedShows.push({ platformName: show.platformName, ...series });
      }
    }
  }

  return (
    <div>
      <h2>Selected Shows</h2>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-4 gap-5">
        {selectedShows.map((series) => (
          <ShowCard
            name={series.platformName}
            show={series}
            key={series.slug}
            secondary={true}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomList;
