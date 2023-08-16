import NotFound from "@/components/NotFound";
import ShowCard from "@/components/ShowCard";
import { platforms } from "@/lib/data";
import { profile } from "@/lib/data";

const MyListPage = () => {
  const myList = profile.myList;

  const selectedShows = myList
    ?.map((show) => {
      const platform = platforms?.find(
        (platform) => platform.name === show.platformName
      );

      if (platform) {
        const series = platform.series.find(
          (series) => series.slug === show.slug
        );

        if (series) {
          return { platformName: show.platformName, ...series };
        }
      }

      return null;
    })
    .filter((show) => show !== null);

  if (!myList || myList.length === 0) {
    return <NotFound type="show" />;
  }

  if (!platforms || platforms.length === 0) {
    return <NotFound type="blogs" />;
  }

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

export default MyListPage;
