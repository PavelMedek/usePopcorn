/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { platforms } from "@/lib/data";
import Link from "next/link";

const Page = ({ params }) => {
  const platform = platforms?.find((el) => el.name === params.platformName);

  const { color, image, name, cover, series } = platform || {};

  const shows = series;

  const router = useRouter();

  if (!platform) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase gap-3">
        <p>No Platform</p>
        <button
          onClick={() => router.back()}
          className="bg-blue-500 py-4 w-36 rounded-md font-bold text-lg text-center uppercase sm:py-2"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <div className="rounded-xl h-[40rem] overflow-hidden md:h-[20rem] xl:h-[30rem] lg:h-[20rem] sm:h-[15rem]">
        <div
          style={{ backgroundImage: `url(${cover})` }}
          className="w-full bg-cover h-full"
        >
          <img src={cover} className="w-full h-full" alt="cover" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">All</h1>
          <p className="underline font-light">Show all</p>
        </div>

        <div className="grid grid-cols-xl lg:grid-cols-lg md:grid-cols-md sm:grid-cols-sm gap-5">
          {shows.map((show) => (
            <Link href={`${name}/${show.slug}`} key={show.slug}>
              <div key={show.slug} className="relative h-44 bg-red-300 -z-10">
                <img
                  src={show.thumbnail}
                  className="w-full h-full"
                  alt="thumbnail"
                />
                <div className="absolute bottom-0 w-full backdrop-blur-sm px-3 py-3">
                  {show.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
