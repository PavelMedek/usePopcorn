"use client";

import Button from "@/components/Button";
import EpisodeHeader from "@/components/EpisodeHeader/EpisodeHeader";
import { platforms } from "@/lib/data";
import Image from "next/image";
import React from "react";

const EpisodePage = ({ params }) => {
  const showName = params.showName;
  const episodeName = params.episodeName;

  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform?.series?.find((el) => el.slug === showName);
  const episode = show?.episodes.find((el) => el.slug === episodeName);

  if (!episode) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase w-full p-16 md:py-16 md:px-5 gap-10">
        <p>No Episode</p>
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
      <EpisodeHeader episode={episode} showTitle={show.title} />
      <div className="px-16 md:px-5 flex flex-col gap-10">
        <div className="w-1/2 md:w-full">
          <h2 className="text-2xl uppercase text-[#4C4158] mb-3">
            description
          </h2>
          <p>{episode.desc}</p>
        </div>

        <div>
          <h2 className="text-2xl uppercase text-[#4C4158] mb-3">Images</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-6 gap-3">
            {episode.images.map((image) => (
              <div className="relative aspect-square" key={image}>
                <Image
                  src={image}
                  style={{ objectFit: "cover" }}
                  fill
                  alt="st"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl uppercase text-[#4C4158] mb-3">Cast</h2>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {episode.cast.map((el) => (
              <div key={el.actor} className="flex items-center gap-3">
                <Image
                  src={el.image}
                  width={70}
                  height={70}
                  alt={el.actor}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold">{el.actor}</h2>
                  <p className="font-light">{el.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl uppercase text-[#4C4158] mb-3">Comment</h2>
          <textarea className=" w-full h-40 bg-[#4C4158] rounded-xl"></textarea>
          <div className="pt-4 w-full flex justify-end">
            <Button text="send" />
          </div>
          <div className="flex gap-5 flex-col pb-5">
            {episode.comments.map((commnt, index) => (
              <div className="flex flex-row w-full gap-3" key={index}>
                <div>
                  <div className="relative w-14 h-14 rounded-full">
                    <Image
                      src={commnt.image}
                      fill
                      alt="user"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h1>{commnt.name}</h1>
                  <p className="font-thin">{commnt.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodePage;
