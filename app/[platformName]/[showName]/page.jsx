"use client";

import { platforms } from "@/lib/data";
import React from "react";

const page = ({ params }) => {
  const showName = params.showName;

  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform.series.find((el) => el.slug === showName);
  const { cast, categories, desc, release, slug, title } = show;

  return (
    <div>
      <p>{title}</p>
      <p>{release}</p>
      <p>{desc}</p>
      <p>{categories}</p>
      <p>{cast}</p>
    </div>
  );
};

export default page;
