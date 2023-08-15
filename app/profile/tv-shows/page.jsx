import React from "react";
import TVShowsClient from "./TVShowsClient";
import { platforms } from "@/lib/data";

const TVShowsPage = () => {
  return <TVShowsClient platforms={platforms} />;
};

export default TVShowsPage;
