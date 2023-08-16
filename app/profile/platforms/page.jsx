import React from "react";
import PlatformsClient from "./PlatformsClient";
import { platforms } from "@/lib/data";
import NotFound from "@/components/NotFound";

const PlatformsPage = () => {
  if (!platforms || platforms.length === 0) {
    return <NotFound type="blogs" />;
  }

  return <PlatformsClient platforms={platforms} />;
};

export default PlatformsPage;
