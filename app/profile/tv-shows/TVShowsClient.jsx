"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const TVShowsClient = ({ platforms }) => {
  const router = useRouter();

  const allShow = platforms.flatMap((platform) =>
    platform.series.map((series) => ({
      ...series,
      platformName: platform.name,
    }))
  );

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <div className="flex justify-between items-center">
        <h1 className="uppercase text-5xl">TV SHOWS</h1>
        <button className="bg-blue-500 py-4 px-6 rounded-md font-bold text-lg text-center uppercase sm:py-2">
          + ADD
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {allShow.map((show) => (
          <div key={show.slug}>
            <div className="flex justify-between items-center bg-[#1A161E] py-3 px-5">
              <div className="flex gap-5 items-center">
                <Image
                  src={show.thumbnail}
                  width={150}
                  height={75}
                  alt={show.slug}
                />
                {show.title}
              </div>

              <div className="flex gap-5">
                <button onClick={() => router.push(`tv-shows/${show.slug}`)}>
                  Add Episode
                </button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShowsClient;
