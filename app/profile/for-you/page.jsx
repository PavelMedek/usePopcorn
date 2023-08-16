import NotFound from "@/components/NotFound";
import ForYouClient from "./ForYouClient";
import { profile, platforms } from "@/lib/data";

const ForYouList = () => {
  if (!platforms || platforms.length === 0) {
    return <NotFound type="blogs" />;
  }

  return <ForYouClient profile={profile} platforms={platforms} />;
};

export default ForYouList;
