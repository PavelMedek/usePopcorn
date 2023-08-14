import ForYouClient from "./ForYouClient";
import { profile, platforms } from "@/lib/data";

const ForYouList = () => {
  return <ForYouClient profile={profile} platforms={platforms} />;
};

export default ForYouList;
