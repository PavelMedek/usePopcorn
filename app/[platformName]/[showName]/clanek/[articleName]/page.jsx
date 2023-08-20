import { platforms } from "@/lib/data";
import ArticleClient from "./ArticleClient";
import NotFound from "@/components/NotFound";

const ArticlePage = ({ params }) => {
  const showName = params.showName;
  const articleName = params.articleName;

  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform?.series?.find((el) => el.slug === showName);
  const article = show?.articles?.find((el) => el.slug === articleName);

  if (!article) {
    return <NotFound type="Article" />;
  }

  return <ArticleClient article={article} />;
};

export default ArticlePage;
