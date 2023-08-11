"use client";

import BlogsTab from "@/components/BlogsTab";
import EpisodesTab from "@/components/EpisodesTab";
import OverviewTab from "@/components/OverviewTab";
import ShowHeader from "@/components/ShowHeader";
import ShowList from "@/components/ShowList";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "query-string";

const ShowClient = ({
  cast,
  categories,
  desc,
  title,
  thumbnail,
  trailer,
  images,
  comments,
  episodes,
  articles,
  slug,
  shows,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const search = searchParams.get("activeTab");
    setActiveLink(search || "Overview"); // Set 'about' as the default value
  }, [searchParams]);

  const handleTabClick = (tab, value) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [value]: tab,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
    setActiveLink(tab);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full flex flex-col pb-7">
      <ShowHeader categories={categories} thumbnail={thumbnail} title={title} />
      <div className="px-16 md:px-5 flex flex-col gap-10">
        {/* start component menu */}
        <div className="flex border border-white w-fit rounded-xl">
          <p
            onClick={() => handleTabClick("Overview", "activeTab")}
            className=" py-2 cursor-pointer px-5 rounded-l-xl"
            style={{
              background: activeLink === "Overview" ? "#4C4158" : "#1A161E",
            }}
          >
            Overview
          </p>
          <p
            onClick={() => handleTabClick("Episodes", "activeTab")}
            className="py-2 cursor-pointer px-5"
            style={{
              background: activeLink === "Episodes" ? "#4C4158" : "#1A161E",
            }}
          >
            Episodes
          </p>
          <p
            onClick={() => handleTabClick("Articles", "activeTab")}
            className="py-2 cursor-pointer px-5 rounded-r-xl"
            style={{
              background: activeLink === "Articles" ? "#4C4158" : "#1A161E",
            }}
          >
            Articles
          </p>
        </div>
        {/* end component menu */}

        {activeLink === "Overview" && (
          <OverviewTab
            cast={cast}
            comments={comments}
            desc={desc}
            images={images}
            trailer={trailer}
          />
        )}

        {activeLink === "Episodes" && (
          <EpisodesTab platform={slug} episodes={episodes} />
        )}
        {activeLink === "Articles" && (
          <BlogsTab articles={articles} platform={slug} />
        )}

        <ShowList
          shows={shows}
          name={name}
          type="Similar shows"
          secondary={true}
          slice={true}
          random={true}
          link={false}
        />
      </div>
    </div>
  );
};

export default ShowClient;
