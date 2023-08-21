import NotFound from "@/components/NotFound";
import ForYouClient from "./ForYouClient";

import getCurrentProfile from "@/actions/getCurrentProfile";
import getShows from "@/actions/getShows";

const ForYouList = () => {
  const profile = getCurrentProfile();
  const shows = getShows();

  if (!shows || shows.length === 0) {
    return <NotFound type="shows" />;
  }

  return <ForYouClient profile={profile.forYou} shows={shows} />;
};

export default ForYouList;
