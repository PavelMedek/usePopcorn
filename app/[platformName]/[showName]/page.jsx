"use client";

import ShowHeader from "@/components/ShowHeader";
import { platforms } from "@/lib/data";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const showName = params.showName;
  const router = useRouter();

  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform?.series?.find((el) => el.slug === showName);
  const { cast, categories, desc, release, slug, title, thumbnail } =
    show || {};

  if (!show) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase w-full p-16 md:py-16 md:px-5 gap-10">
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
    <div className="w-full flex flex-col">
      <ShowHeader categories={categories} thumbnail={thumbnail} title={title} />

      <div className="px-16 md:px-5 gap-10">
        <h1>test</h1>
        <p>test</p>
      </div>
    </div>
  );
};

export default Page;
