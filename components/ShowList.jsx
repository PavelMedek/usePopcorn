import Link from "next/link";
import React from "react";
import ShowCard from "./ShowCard";

const ShowList = ({ shows, name, type, secondary, random, slice, link }) => {
  let firstFiveMovies = shows;

  if (slice) {
    firstFiveMovies = shows.slice(0, 4);
  }

  if (shows.length === 0) {
    return <div>No</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        {secondary ? (
          <h2 className="text-2xl uppercase text-[#4C4158]">{type}</h2>
        ) : (
          <h1 className="text-3xl font-bold">{type}</h1>
        )}
        {link && (
          <Link
            href={`${name}/categorie/${type}`}
            className="underline font-light"
          >
            Show all
          </Link>
        )}
      </div>

      <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-4 gap-5">
        {firstFiveMovies.map((show) => (
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
