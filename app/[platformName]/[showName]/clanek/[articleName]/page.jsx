import PlatformBillboard from "@/components/PlatformBillboard";
import { platforms } from "@/lib/data";
import ArticleClient from "./ArticleClient";

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
        <button className="bg-blue-500 py-4 w-36 rounded-md font-bold text-lg text-center uppercase sm:py-2">
          Back
        </button>
      </div>
    );
  }

  return <ArticleClient article={article} />;
};

export default ArticlePage;
