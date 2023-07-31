"use client";

import Button from "@/components/Button";
import OverviewTab from "@/components/OverviewTab";
import ShowHeader from "@/components/ShowHeader";
import ShowList from "@/components/ShowList";
import { platforms } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [isMounted, setIsMounted] = useState(false);
  const showName = params.showName;
  const router = useRouter();

  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform?.series?.find((el) => el.slug === showName);
  const {
    cast,
    categories,
    desc,
    release,
    slug,
    title,
    thumbnail,
    trailer,
    images,
    comments,
  } = show || {};

  const [activeLink, setActiveLink] = useState("Overview");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const shows = platform.series;
  const name = platform.name;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

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

        <OverviewTab
          cast={cast}
          comments={comments}
          desc={desc}
          images={images}
          trailer={trailer}
        />

        <ShowList
          shows={shows}
          name={name}
          type="Similar shows"
          secondary={true}
          slice={true}
          random={true}
        />
      </div>
    </div>
  );
};

export default Page;
