"use client";

import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const EpisodeSwitcher = ({ episodes, episode }) => {
  const episodeName = episode.slug;

  const currentEpisodeIndex = episodes.findIndex(
    (el) => el.slug === episodeName
  );

  const nextEpisodeIndex = currentEpisodeIndex + 1;
  const prevEpisodeIndex = currentEpisodeIndex - 1;

  if (!episode) {
    return <div>fdsanikl</div>;
  }

  return (
    <div className="flex gap-5 items-center md:w-full">
      {prevEpisodeIndex >= 0 ? (
        <Link
          className="border px-3 py-1 rounded-lg md:w-full flex items-center gap-2 justify-between"
          href={`${episodes[prevEpisodeIndex].slug}`}
        >
          <AiOutlineLeft /> Předešlá Episoda
        </Link>
      ) : (
        <button
          disabled={true}
          className="border px-3 py-1 rounded-lg md:w-full flex items-center gap-2 justify-between disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <AiOutlineLeft /> Předešlá Episoda
        </button>
      )}
      {nextEpisodeIndex < episodes.length ? (
        <Link
          className="border px-3 py-1 rounded-lg md:w-full flex items-center gap-2 justify-between"
          href={`${episodes[nextEpisodeIndex].slug}`}
        >
          Další Episoda <AiOutlineRight />
        </Link>
      ) : (
        <button
          disabled={true}
          className="border px-3 py-1 rounded-lg md:w-full flex items-center gap-2 justify-between disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Další Episoda <AiOutlineRight />
        </button>
      )}
    </div>
  );
};

export default EpisodeSwitcher;
