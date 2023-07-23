"use client";

import { useRouter } from "next/navigation";

import { platforms } from "@/lib/data";
import { useState } from "react";
import MobileNavBar from "@/components/Sidebar/MobileNavBar";

const Page = ({ params }) => {
  const name = params.platformName;

  const platform = platforms.find((el) => el.name === params.platformName);

  if (!platform) {
    return <div>No platform</div>;
  }

  return (
    <>
      <p>{name}</p>
    </>
  );
};

export default Page;
