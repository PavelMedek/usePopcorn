"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BlogsClient = ({ platforms }) => {
  const [selectedSeries, setSelectedSeries] = useState(platforms[0].series[0]);
  const router = useRouter();

  const handleSeriesChange = (event) => {
    const selectedSlug = event.target.value;
    const foundSeries = platforms
      .flatMap((platform) => platform.series)
      .find((series) => series.slug === selectedSlug);
    setSelectedSeries(foundSeries);
  };

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10 bg-[#0d0c0f]">
      <div className="show-switcher flex flex-col gap-5">
        <div className="flex items-center justify-between md:flex-col md:items-start gap-5">
          <h2 className="text-5xl mb-2 uppercase">Blogs</h2>
          <select
            className="p-2 bg-gray-800 rounded md:w-full"
            onChange={handleSeriesChange}
            value={selectedSeries.slug}
          >
            {platforms
              .flatMap((platform) => platform.series)
              .map((series) => (
                <option key={series.slug} value={series.slug}>
                  {series.title}
                </option>
              ))}
          </select>

          <button
            className="bg-blue-500 py-4 px-6 rounded-md font-bold text-lg text-center uppercase sm:py-2 md:w-full"
            onClick={() => router.push("blogs/add")}
          >
            + ADD
          </button>
        </div>
        <div className="article">
          {selectedSeries.articles ? (
            selectedSeries.articles.map((article, index) => (
              <div
                key={index}
                className="mb-4 bg-[#1A161E] p-3 flex justify-between md:flex-col items-center gap-3"
              >
                <h4 className="text-lg font-semibold">
                  {article.title} - {selectedSeries.title}
                </h4>
                <div className="flex gap-5 md:w-full">
                  <button className="bg-blue-500 py-2 px-3 rounded-md md:w-full">
                    Edit
                  </button>
                  <button className="bg-red-500 py-2 px-3 rounded-md md:w-full">
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-5xl uppercase font-bold">No blogs found</h1>
              <Image
                src="/images/Oops! 404 Error with a broken robot-cuate.svg"
                width={300}
                height={300}
                alt="not found"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsClient;
