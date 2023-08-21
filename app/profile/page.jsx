import ProfileClient from "./ProfileClient";
import NotFound from "@/components/NotFound";

import getCurrentProfile from "@/actions/getCurrentProfile";
import getShows from "@/actions/getShows";

const Page = () => {
  const profile = getCurrentProfile();
  const shows = getShows();

  if (!shows || shows.length === 0) {
    return <NotFound type="shows" />;
  }

  return <ProfileClient profile={profile} shows={shows} />;
};

export default Page;
