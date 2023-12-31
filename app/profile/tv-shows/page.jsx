import React from "react";
import TVShowsClient from "./TVShowsClient";
import { platforms } from "@/lib/data";
import NotFound from "@/components/NotFound";

const TVShowsPage = () => {
  if (!platforms || platforms.length === 0) {
    return <NotFound type="blogs" />;
  }

  return <TVShowsClient platforms={platforms} />;
};

export default TVShowsPage;
