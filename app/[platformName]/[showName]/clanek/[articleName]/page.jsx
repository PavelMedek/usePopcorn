"use client";

import PlatformBillboard from "@/components/PlatformBillboard";
import { platforms } from "@/lib/data";

const ArticlePage = ({ params }) => {
  const showName = params.showName;
  const articleName = params.articleName;

  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform?.series?.find((el) => el.slug === showName);
  const article = show?.articles?.find((el) => el.slug === articleName);

  if (!article) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase w-full p-16 md:py-16 md:px-5 gap-10">
        <p>No Article</p>
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
      <PlatformBillboard cover={article.cover} />

      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="font-semibold">{article.desc}</p>
      <p className="font-light">{article.body}</p>
    </div>
  );
};

export default ArticlePage;
