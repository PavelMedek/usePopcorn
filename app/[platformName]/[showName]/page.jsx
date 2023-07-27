"use client";

import { platforms } from "@/lib/data";

import { useRouter } from "next/navigation";

import { FaPlay } from "react-icons/fa";

const Page = ({ params }) => {
  const showName = params.showName;
  const router = useRouter();

  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform?.series?.find((el) => el.slug === showName);
  const { cast, categories, desc, release, slug, title, thumbnail } =
    show || {};

  if (!show) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase w-full p-16 md:py-16 md:px-5 gap-10">
        <p>No show</p>
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
    <div className="w-full flex flex-col">
      <div
        style={{ backgroundImage: `url(${thumbnail})` }}
        className="h-[40rem] w-full bg-center bg-cover md:-z-10"
      >
        <div className="bg-gradient-to-b from-transparent to-[#0D0C0F] w-full h-full"></div>
      </div>
      <div className="w-full flex flex-col p-16 md:py-16 md:px-5 mt-[-300px] gap-3">
        <p className="text-4xl font-semibold uppercase">{title}</p>
        <div className="flex flex-row gap-3">
          {categories.map((category) => (
            <div
              key={category}
              className="py-1 px-3 bg-[#0D0C0F]/75 rounded-xl border border-white"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-show_xl lg:grid-cols-show_lg md:grid-cols-show_md sm:grid-cols-show_sm gap-5 md:-z-10">
          <div className="bg-red-700 flex flex-row items-center justify-center py-14 rounded-2xl">
            <FaPlay className="w-8 h-8" />
          </div>
          <div className="bg-[#1A161E]/75 flex flex-row items-center justify-center py-14 rounded-2xl">
            <h1 className="rotate-90 text-lg uppercase">release</h1>
            <p className="text-2xl font-semibold w-full text-center">
              April 7, 2023
            </p>
          </div>
          <div className="bg-[#1A161E]/75 flex flex-row items-center py-14 rounded-2xl">
            <h1 className="rotate-90 text-lg uppercase ">seasons</h1>
            <p className="text-2xl font-semibold w-full text-center">8</p>
          </div>
          <div className="bg-[#1A161E]/75 flex flex-row items-center justify-center py-14 rounded-2xl">
            <h1 className="rotate-90 text-lg uppercase">Episodes</h1>
            <p className="text-2xl font-semibold w-full text-center">52</p>
          </div>
          <div className="bg-[#1A161E]/75 flex flex-row items-center justify-center py-14 rounded-2xl">
            <h1 className="rotate-90 text-lg uppercase">Length</h1>
            <p className="text-2xl font-semibold w-full text-center">
              80h 42 min
            </p>
          </div>
        </div>
      </div>

      <div className="px-16 md:py-16 md:px-5 gap-10">
        <h1>test</h1>
        <p>test</p>
      </div>
    </div>
  );
};

export default Page;
