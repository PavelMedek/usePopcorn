import getArticle from "@/actions/getArticle";

import ArticleClient from "./ArticleClient";
import NotFound from "@/components/NotFound";

const ArticlePage = ({ params }) => {
  const { platformName, showName, articleName } = params;

  const article = getArticle(platformName, showName, articleName);

  if (!article) {
    return <NotFound type="Article" />;
  }

  return <ArticleClient article={article} />;
};

export default ArticlePage;
