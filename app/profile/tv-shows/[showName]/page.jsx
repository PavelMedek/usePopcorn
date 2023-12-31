import { platforms } from "@/lib/data";
import React from "react";
import ShowClient from "./ShowClient";

const page = ({ params }) => {
  const episodeName = params.showName;

  const show = platforms
    .flatMap((platform) => platform.series)
    .find((serie) => serie.slug === episodeName);

  return <ShowClient show={show} params={params} />;
};

export default page;
