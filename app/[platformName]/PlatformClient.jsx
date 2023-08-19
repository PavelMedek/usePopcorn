"use client";

import { useMemo } from "react";

import useCategorizedShows from "@/hooks/useCategorizedShows";

import PlatformBillboard from "@/components/Billboard";
import ShowList from "@/components/ShowList";

const PlatformClient = ({ series, platform, cover, name }) => {
  const shows = useMemo(() => series || [], [series]);
  const showsByCategory = useCategorizedShows(series);

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <PlatformBillboard cover={cover} />
      <ShowList slice={true} shows={shows} name={name} type="Vše" link={true} />

      {showsByCategory?.map(({ category, shows }) => (
        <div key={category}>
          <ShowList
            shows={shows}
            name={name}
            type={category}
            random={true}
            slice={true}
            link={true}
          />
        </div>
      ))}
    </div>
  );
};

export default PlatformClient;
