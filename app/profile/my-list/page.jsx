import NotFound from "@/components/NotFound";
import MyListClient from "./MyListClient";

import getShows from "@/actions/getShows";
import getShowsFromMyList from "@/actions/getShowsFromMyList";
import getCurrentProfile from "@/actions/getCurrentProfile";

const MyListPage = () => {
  const myList = getCurrentProfile().myList;

  const shows = getShows();
  const selectedShows = getShowsFromMyList(myList, shows);

  if (!myList || myList.length === 0) {
    return <NotFound type="shows" />;
  }

  return <MyListClient selectedShows={selectedShows} />;
};

export default MyListPage;
