import NotFound from "@/components/NotFound";
import ShowCard from "@/components/ShowCard";

import getForYouList from "@/actions/getForYouList";

const ForYouClient = ({ profile, shows }) => {
  const filteredSeries = getForYouList(shows, profile);

  if (!filteredSeries || filteredSeries.length === 0) {
    return <NotFound type="shows" />;
  }

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <h1 className="uppercase text-5xl">For You List</h1>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-4 gap-5 ">
        {filteredSeries.map((series) => (
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

export default ForYouClient;
