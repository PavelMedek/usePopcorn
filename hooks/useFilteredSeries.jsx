import { series } from "@/lib/test-data";

export const useFilteredSeries = (slugs) => {
  const filteredSeries = series.filter((item) => {
    return slugs?.some((selectedSlug) => selectedSlug.slug === item.slug);
  });

  return filteredSeries;
};
