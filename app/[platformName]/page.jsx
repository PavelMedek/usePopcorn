"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { platforms } from "@/lib/data";

const Page = ({ params }) => {
  const platform = platforms?.find((el) => el.name === params.platformName);

  const { color, image, name } = platform || {};

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
    <>
      <p>{name}</p>
      <p>{color}</p>
      <Image src={image} alt="image" width={250} height={100} />
    </>
  );
};

export default Page;
