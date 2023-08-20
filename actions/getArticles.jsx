import { articles } from "@/lib/test-data";

const getArticles = (slugArray) => {
  return articles.filter((article) =>
    slugArray?.some((slugObj) => slugObj.slug === article.slug)
  );
};

export default getArticles;
