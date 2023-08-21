import NotFound from "@/components/NotFound";
import MyListClient from "./MyListClient";

import getShows from "@/actions/getShows";
import getCurrentProfile from "@/actions/getCurrentProfile";

const MyListPage = () => {
  const myList = getCurrentProfile().myList;
  const shows = getShows();

  if (!myList || myList.length === 0) {
    return <NotFound type="shows" />;
  }

  return <MyListClient myList={myList} shows={shows} />;
};

export default MyListPage;
