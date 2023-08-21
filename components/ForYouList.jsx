import Link from "next/link";

import ShowCard from "./ShowCard";

import getForYouList from "@/actions/getForYouList";

const ForYouList = ({ forYou, shows }) => {
  const filteredSeries = getForYouList(shows, forYou, 4);

  if (!filteredSeries || filteredSeries.length === 0) {
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
        {filteredSeries?.map((series) => (
          <ShowCard
            name={series.platformSlug}
            show={series}
            key={series.slug}
            secondary={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ForYouList;
