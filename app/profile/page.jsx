import React from "react";
import ProfileClient from "./ProfileClient";
import { profile, platforms } from "@/lib/data";
import NotFound from "@/components/NotFound";

const Page = () => {
  if (!platforms || platforms.length === 0) {
    return <NotFound type="blogs" />;
  }

  return <ProfileClient profile={profile} platforms={platforms} />;
};

export default Page;
