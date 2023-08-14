import React from "react";
import ProfileClient from "./ProfileClient";
import { profile } from "@/lib/data";

const Page = () => {
  return <ProfileClient profile={profile} />;
};

export default Page;
