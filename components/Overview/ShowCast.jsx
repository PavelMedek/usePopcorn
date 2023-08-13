import React from "react";
import Heading from "../Heading";
import Image from "next/image";

const ShowCast = ({ cast }) => {
  return (
    <div>
      <Heading text="Obsazení" className="mb-3" />
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
        {cast.map((el) => (
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
  );
};

export default ShowCast;
