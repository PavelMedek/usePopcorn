import React from "react";
import PlatformsClient from "./PlatformsClient";
import { platforms } from "@/lib/data";

const PlatformsPage = () => {
  return <PlatformsClient platforms={platforms} />;
};

export default PlatformsPage;
