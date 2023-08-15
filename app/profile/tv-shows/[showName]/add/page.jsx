"use client";

import { platforms } from "@/lib/data";
import React from "react";

const page = ({ params }) => {
  const showName = params.showName;

  const platformWithShow = platforms.find((platform) =>
    platform.series.some((series) => series.slug === showName)
  );

  if (!platformWithShow) {
    return <div>Show not found</div>;
  }

  // Find the specific show details
  const show = platformWithShow.series.find(
    (series) => series.slug === showName
  );

  return (
    <div>
      <h1>{show.slug}</h1>
      <p>{platformWithShow.name}</p>
    </div>
  );
};

export default page;
