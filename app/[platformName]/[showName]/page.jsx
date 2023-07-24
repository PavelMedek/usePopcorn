"use client";

import Button from "@/components/Button";
import { platforms } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = ({ params }) => {
  const showName = params.showName;
  const router = useRouter();

  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform?.series?.find((el) => el.slug === showName);
  const { cast, categories, desc, release, slug, title } = show || {};

  if (!show) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase gap-3">
        <p>No show</p>
        <button
          onClick={() => router.back()}
          className="bg-blue-500 py-4 w-36 rounded-md font-bold text-lg text-center uppercase sm:py-2"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>{title}</p>
      <p>{release}</p>
      <p>{desc}</p>
      <p>{categories}</p>
      <p>{cast}</p>

      {show.title}
    </div>
  );
};

export default Page;
