"use client";

import { useRouter } from "next/navigation";

import { platforms } from "@/lib/data";
import { useState } from "react";
import MobileNavBar from "@/components/Sidebar/MobileNavBar";
import Image from "next/image";

const Page = ({ params }) => {
  const platform = platforms.find((el) => el.name === params.platformName);

  if (!platform) {
    return <div>No platform</div>;
  }

  const { color, image, name } = platform;

  return (
    <>
      <p>{name}</p>
      <p>{color}</p>

      <Image src={image} alt="image" width={250} height={100} />
    </>
  );
};

export default Page;
