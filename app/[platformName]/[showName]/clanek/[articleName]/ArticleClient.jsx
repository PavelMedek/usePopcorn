import PlatformBillboard from "@/components/PlatformBillboard";

const ArticleClient = ({ article }) => {
  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <PlatformBillboard cover={article.cover} />

      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="font-semibold">{article.desc}</p>
      <p className="font-light">{article.body}</p>
    </div>
  );
};

export default ArticleClient;
