import Link from "next/link";
import React from "react";
import ShowCard from "./ShowCard";
import useFilteredPlatforms from "@/hooks/useFilteredPlatforms";

const ForYouList = ({ profile, platforms }) => {
  const filteredPlatforms = useFilteredPlatforms(profile, platforms, 4);

  if (!filteredPlatforms || filteredPlatforms.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-3">For You List</h1>
        <Link href="profile/for-you" className="underline font-light">
          Zobrazit vše
        </Link>
      </div>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-4 gap-5">
        {filteredPlatforms?.map((platform) =>
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

export default ForYouList;
