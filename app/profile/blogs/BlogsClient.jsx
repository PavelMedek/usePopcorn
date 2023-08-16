"use client";

import Image from "next/image";
import { useState } from "react";

const BlogsClient = ({ platforms }) => {
  const [selectedSeries, setSelectedSeries] = useState(platforms[0].series[0]);

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
        </div>
        <div className="article">
          {selectedSeries.articles ? (
            selectedSeries.articles.map((article, index) => (
              <div
                key={index}
                className="mb-4 bg-[#1A161E] p-3 flex justify-between md:flex-col"
              >
                <h4 className="text-lg font-semibold">
                  {article.title} - {selectedSeries.title}
                </h4>
                <div className="flex gap-5 md:justify-between">
                  <button onClick={() => router.push(`tv-shows/${show.slug}`)}>
                    Edit Blog
                  </button>
                  <button>Delete</button>
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
