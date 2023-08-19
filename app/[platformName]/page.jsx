import { getShowsByPlatform } from "@/actions/getShowsByPlatform";
import getPlatformData from "@/actions/getPlatformData";

import PlatformClient from "./PlatformClient";
import NotFound from "@/components/NotFound";

const Page = ({ params }) => {
  const { platformName } = params;
  const platform = getPlatformData(platformName);
  const shows = getShowsByPlatform(platformName);

  const { name, cover } = platform || {};

  if (!platform) {
    return <NotFound type="platform" />;
  }

  return (
    <PlatformClient
      series={shows}
      platform={platform}
      cover={cover}
      name={name}
    />
  );
};

export default Page;
