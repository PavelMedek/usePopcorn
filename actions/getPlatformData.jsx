import { platforms } from "@/lib/test-data";

const getPlatformData = (platformName) => {
  const foundPlatform = platforms?.find(
    (platform) => platform.name === platformName
  );

  return foundPlatform;
};

export default getPlatformData;
