/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { platforms } from "@/lib/data";

const Page = ({ params }) => {
  const platform = platforms?.find((el) => el.name === params.platformName);

  const { color, image, name, cover } = platform || {};

  const router = useRouter();

  if (!platform) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase gap-3">
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
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5">
      <div className="rounded-xl h-[40rem] overflow-hidden md:h-[20rem] xl:h-[30rem] lg:h-[20rem] sm:h-[15rem]">
        <div
          // style={{ backgroundImage: `url(${cover})` }}
          className="w-full bg-cover h-full"
        >
          <img src={cover} className="w-full h-full" alt="cover" />
        </div>
      </div>
      <p>dsa</p>
    </div>
  );
};

export default Page;
