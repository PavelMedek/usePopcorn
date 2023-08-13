import React from "react";
import Heading from "../Heading";

const Trailer = ({ trailer }) => {
  return (
    <div>
      <Heading text="TRAILER" className="mb-3" />
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
  );
};

export default Trailer;
