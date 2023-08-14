"use client";

import { platforms, profile } from "@/lib/data";
import { useEffect, useMemo, useState } from "react";

export default function useFilteredPlatforms(totalToShow = 5000) {
  const [filteredPlatforms, setFilteredPlatforms] = useState([]);

  const forYou = useMemo(() => profile.forYou, []);

  useEffect(() => {
    if (!forYou || forYou.length === 0) return;

    let totalFilteredShows = [];
    const filteredData = platforms.map((platform) => {
      const filteredSeries = platform.series
        .filter((series) =>
          series.categories.some((category) => forYou.includes(category))
        )
        .slice(0, totalToShow - totalFilteredShows.length); // Calculate remaining shows needed
      totalFilteredShows = totalFilteredShows.concat(filteredSeries);
      return {
        ...platform,
        series: filteredSeries,
      };
    });

    setFilteredPlatforms(filteredData);
  }, [forYou, totalToShow]);

  return filteredPlatforms;
}
