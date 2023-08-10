import React from "react";

const EpisodeHeaderImage = ({ cover }) => {
  return (
    <div
      style={{ backgroundImage: `url(${cover})` }}
      className="h-[40rem] w-full bg-center bg-cover md:-z-10"
    >
      <div className="bg-gradient-to-b from-transparent to-[#0D0C0F] w-full h-full"></div>
    </div>
  );
};

export default EpisodeHeaderImage;
