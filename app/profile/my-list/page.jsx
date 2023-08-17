import NotFound from "@/components/NotFound";
import ShowCard from "@/components/ShowCard";
import { platforms } from "@/lib/data";
import { profile } from "@/lib/data";
import MyListClient from "./MyListClient";

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

  return <MyListClient selectedShows={selectedShows} />;
};

export default MyListPage;
