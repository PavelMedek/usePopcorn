"use client";

import BlogsTab from "@/components/Blogs/BlogsTab";
import EpisodesTab from "@/components/Episodes/EpisodesTab";
import OverviewTab from "@/components/Overview/OverviewTab";
import ShowHeader from "@/components/ShowHeader/ShowHeader";
import ShowList from "@/components/ShowList";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "query-string";
import TabsMenu from "@/components/TabsMenu";

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
  name,
  showName,
}) => {
  const showRelease = shows.find((el) => el.slug === showName).release;
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
      <ShowHeader
        categories={categories}
        thumbnail={thumbnail}
        title={title}
        episodes={episodes}
        showRelease={showRelease}
      />
      <div className="px-16 md:px-5 flex flex-col gap-10">
        <TabsMenu activeLink={activeLink} handleTabClick={handleTabClick} />

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
          type="Podobné seriály"
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
