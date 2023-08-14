"use client";

import NotFound from "@/components/NotFound";
import ShowCard from "@/components/ShowCard";
import useFilteredPlatforms from "@/hooks/useFilteredPlatforms";
import React from "react";

const ForYouClient = ({ profile, platforms }) => {
  const filteredPlatforms = useFilteredPlatforms(profile, platforms);

  if (!filteredPlatforms || filteredPlatforms.length === 0) {
    return <NotFound type="shows" />;
  }

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <h1 className="uppercase text-5xl">For You List</h1>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-4 gap-5 ">
        {filteredPlatforms.map((platform) =>
          platform.series.map((series) => (
            <ShowCard
              name={platform.name}
              show={series}
              key={series.slug}
              secondary={true}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ForYouClient;
