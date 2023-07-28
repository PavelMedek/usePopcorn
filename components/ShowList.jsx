import Link from "next/link";
import React from "react";
import ShowCard from "./ShowCard";

const ShowList = ({ shows, name, type, secondary }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        {secondary ? (
          <h2 className="text-2xl uppercase text-[#4C4158]">{type}</h2>
        ) : (
          <h1 className="text-3xl font-bold">{type}</h1>
        )}
        <p className="underline font-light">Show all</p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-cols-4 gap-5">
        {shows.map((show) => (
          <ShowCard
            show={show}
            key={show.slug}
            name={name}
            secondary={secondary}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowList;
