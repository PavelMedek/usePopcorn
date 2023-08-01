/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";

import { platforms } from "@/lib/data";
import PlatformBillboard from "@/components/PlatformBillboard";
import ShowList from "@/components/ShowList";
import { useRouter } from "next/navigation";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Page = ({ params }) => {
  const { platformName } = params;
  const platform = platforms?.find((el) => el.name === platformName) || {};

  const { color, image, name, cover, series } = platform;

  const shows = useMemo(() => series || [], [series]);
  const router = useRouter();
  const [showsByCategory, setShowsByCategory] = useState([]);

  useEffect(() => {
    // Categorize shows by category
    const categorizedShows = shows.reduce((result, show) => {
      show.categories.forEach((category) => {
        const existingCategory = result.find(
          (cat) => cat.category === category
        );
        if (existingCategory) {
          existingCategory.shows.push(show);
        } else {
          result.push({ category, shows: [show] });
        }
      });
      return result;
    }, []);

    categorizedShows.forEach((item) => {
      shuffleArray(item.shows);
    });

    setShowsByCategory(categorizedShows);
  }, [shows]);

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      {platforms.length === 0 || !platform ? (
        <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase w-full p-16 md:py-16 md:px-5 gap-10">
          <p>No Platform</p>
          <button
            onClick={() => router.back()}
            className="bg-blue-500 py-4 w-36 rounded-md font-bold text-lg text-center uppercase sm:py-2"
          >
            Back
          </button>
        </div>
      ) : (
        <>
          <PlatformBillboard cover={cover} />
          <ShowList slice={true} shows={shows} name={name} type="All" />

          {showsByCategory.map(({ category, shows }) => (
            <div key={category}>
              <ShowList
                shows={shows}
                name={name}
                type={category}
                random={true}
                slice={true}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Page;
