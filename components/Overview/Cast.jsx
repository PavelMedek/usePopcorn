import React from "react";
import Heading from "../Heading";
import Image from "next/image";

const Cast = ({ cast }) => {
  return (
    <div>
      <Heading text="obsazení" />
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
  );
};

export default Cast;
