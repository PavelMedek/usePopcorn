/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { platforms } from "@/lib/data";
import Link from "next/link";
import PlatformBillboard from "@/components/PlatformBillboard";
import ShowList from "@/components/ShowList";

const Page = ({ params }) => {
  const platform = platforms?.find((el) => el.name === params.platformName);

  const { color, image, name, cover, series } = platform || {};

  const shows = series;

  const router = useRouter();

  if (!platform) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase w-full p-16 md:py-16 md:px-5 gap-10">
        <p>No Platform</p>
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
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <PlatformBillboard cover={cover} />
      <ShowList shows={shows} name={name} type="All" />
    </div>
  );
};

export default Page;
