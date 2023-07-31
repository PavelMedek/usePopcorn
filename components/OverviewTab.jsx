import React from "react";
import Button from "./Button";
import Image from "next/image";

const OverviewTab = ({ desc, cast, trailer, images, comments }) => {
  return (
    <>
      <div className="w-1/2 md:w-full">
        <h2 className="text-2xl uppercase text-[#4C4158] mb-3">description</h2>
        <p>{desc}</p>
      </div>

      <div>
        <h2 className="text-2xl uppercase text-[#4C4158]">notable cast</h2>
        <div className="flex gap-5 pt-3">
          {cast.map((actor) => (
            <div
              key={actor.name}
              className="flex flex-col gap-2 items-center text-center"
            >
              <div className="relative w-24 h-24 rounded-full">
                <Image
                  src={actor.image}
                  fill
                  className="rounded-full"
                  alt="actor"
                />
              </div>
              <span className="text-sm">{actor.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl uppercase text-[#4C4158] mb-3">Trailer</h2>
        <iframe
          height="400"
          src={trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-1/2 md:w-full"
        ></iframe>
      </div>

      <div>
        <h2 className="text-2xl uppercase text-[#4C4158] mb-3">Images</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-6 gap-3">
          {images.map((image) => (
            <div className="relative aspect-square" key={image}>
              <Image src={image} style={{ objectFit: "cover" }} fill alt="st" />
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
          {comments.map((commnt) => (
            <div className="flex flex-row w-full gap-3" key={commnt.image}>
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
    </>
  );
};

export default OverviewTab;
