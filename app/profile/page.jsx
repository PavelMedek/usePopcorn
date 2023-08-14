import React from "react";
import ProfileClient from "./ProfileClient";
import { profile, platforms } from "@/lib/data";

const Page = () => {
  return <ProfileClient profile={profile} platforms={platforms} />;
};

export default Page;
