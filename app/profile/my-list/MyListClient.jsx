import ShowCard from "@/components/ShowCard";
import React from "react";

const MyListClient = ({ selectedShows }) => {
  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <h1 className="uppercase text-5xl">My List</h1>
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

export default MyListClient;
