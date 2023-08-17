import { platforms } from "@/lib/test-data";

export function usePlatformData(platformName) {
  let foundPlatform;

  foundPlatform = platforms.find((platform) => platform.name === platformName);

  return foundPlatform;
}
