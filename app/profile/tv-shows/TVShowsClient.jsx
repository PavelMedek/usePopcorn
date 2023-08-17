"use client";

import AdminHeading from "@/components/AdminComponents/AdminHeading";
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
      <AdminHeading
        text="TV SHOWS"
        handleClick={() => router.push(`tv-shows/add`)}
      />
      <div className="flex flex-col gap-5">
        {allShow.map((show) => (
          <div key={show.slug}>
            <div className="flex justify-between items-center bg-[#1A161E] py-3 px-5 md:flex-col md:items-start gap-3">
              <div className="flex gap-5 items-center">
                <Image
                  src={show.thumbnail}
                  width={150}
                  height={75}
                  alt={show.slug}
                />
                {show.title}
              </div>

              <div className="flex gap-5 md:justify-between md:w-full">
                <button
                  className="bg-blue-500 py-2 px-3 rounded-md md:w-full"
                  onClick={() => router.push(`tv-shows/${show.slug}`)}
                >
                  Add Episode
                </button>
                <button className="bg-red-500 py-2 px-3 rounded-md md:w-full">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShowsClient;
