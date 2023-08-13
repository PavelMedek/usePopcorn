import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import EpisodeHeader from "@/components/EpisodeHeader/EpisodeHeader";
import Description from "@/components/Overview/Description";
import Images from "@/components/Overview/Images";
import ShowCast from "@/components/Overview/ShowCast";
import Comments from "@/components/Overview/Comments";

const EpisodeClient = ({ episode, show, episodes }) => {
  return (
    <div className="w-full flex flex-col pb-7">
      <EpisodeHeader
        episode={episode}
        showTitle={show.title}
        episodes={episodes}
      />
      <div className="px-16 md:px-5 flex flex-col gap-10">
        <Description desc={episode.desc} />
        <Images images={episode.images} />
        <ShowCast cast={episode.cast} />
        <Comments comments={episode.comments} />
      </div>
    </div>
  );
};

export default EpisodeClient;
