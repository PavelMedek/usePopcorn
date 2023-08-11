import { platforms } from "@/lib/data";
import PlatformClient from "./PlatformClient";
import NotFound from "@/components/NotFound";

const Page = ({ params }) => {
  const { platformName } = params;
  const platform = platforms?.find((el) => el.name === platformName);

  const { name, cover, series } = platform || {};

  if (!platform) {
    return <NotFound type="platform" />;
  }

  return (
    <PlatformClient
      series={series}
      platform={platform}
      cover={cover}
      name={name}
    />
  );
};

export default Page;
