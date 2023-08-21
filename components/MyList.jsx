import Link from "next/link";

import ShowCard from "./ShowCard";

import getShowsFromMyList from "@/actions/getShowsFromMyList";

const MyList = ({ myList, shows }) => {
  const selectedShows = getShowsFromMyList(myList, shows, 4);

  if (!myList || myList.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-3">My List</h1>
        <Link href="profile/my-list" className="underline font-light">
          Zobrazit vše
        </Link>
      </div>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-4 gap-5">
        {selectedShows.map((series) => (
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

export default MyList;
