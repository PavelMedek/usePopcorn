"use client";

import ShowHeader from "@/components/ShowHeader";
import { platforms } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = ({ params }) => {
  const showName = params.showName;
  const router = useRouter();

  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform?.series?.find((el) => el.slug === showName);
  const { cast, categories, desc, release, slug, title, thumbnail } =
    show || {};

  const [activeLink, setActiveLink] = useState("Overview");

  const handleClick = (link) => {
    setActiveLink(link);
  };

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
    <div className="w-full flex flex-col pb-7">
      <ShowHeader categories={categories} thumbnail={thumbnail} title={title} />
      <div className="px-16 md:px-5 flex flex-col gap-10">
        {/* start component menu */}
        <div className="flex border border-white w-fit rounded-xl">
          <p
            onClick={() => handleClick("Overview")}
            className=" py-2 cursor-pointer px-5 rounded-l-xl"
            style={{
              background: activeLink === "Overview" ? "#4C4158" : "#1A161E",
            }}
          >
            Overview
          </p>
          <p
            onClick={() => handleClick("Episodes")}
            className="py-2 cursor-pointer px-5"
            style={{
              background: activeLink === "Episodes" ? "#4C4158" : "#1A161E",
            }}
          >
            Episodes
          </p>
          <p
            onClick={() => handleClick("Articles")}
            className="py-2 cursor-pointer px-5 rounded-r-xl"
            style={{
              background: activeLink === "Articles" ? "#4C4158" : "#1A161E",
            }}
          >
            Articles
          </p>
        </div>
        {/* end component menu */}

        {/* start component Overview */}
        <div className="w-1/2 md:w-full">
          <h2 className="text-2xl uppercase text-[#4C4158]">description</h2>
          <p>{desc}</p>
        </div>

        <div>
          <h2 className="text-2xl uppercase text-[#4C4158]">notable cast</h2>
          <div className="flex gap-5 pt-1">
            {cast.map((actor) => (
              <div
                key={actor}
                className="flex flex-col gap-2 items-center text-center"
              >
                <div className="relative w-24 h-24 rounded-full">
                  <Image
                    src="/images/actor.webp"
                    fill
                    className="rounded-full"
                    alt="actor"
                  />
                </div>
                <span className="text-sm">{actor}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl uppercase text-[#4C4158]">Trailer</h2>
          <iframe
            height="400"
            src="https://www.youtube.com/embed/b9EkMc79ZSU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-1/2 md:w-full"
          ></iframe>
        </div>

        <div>
          <h2 className="text-2xl uppercase text-[#4C4158]">Photos</h2>
        </div>

        {/* end component Overview */}
      </div>
    </div>
  );
};

export default Page;
