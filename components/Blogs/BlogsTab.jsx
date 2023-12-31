import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "../Heading";

const BlogsTab = ({ articles, platform }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl uppercase font-bold">
          Nebyly nalezeny žádné články
        </h1>
        <Image
          src="/images/Oops! 404 Error with a broken robot-cuate.svg"
          width={300}
          height={300}
          alt="not found"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <Heading text="články" />

      <div>
        <ul className="flex flex-col gap-3">
          {articles.map((article) => (
            <Link
              href={`${platform}/clanek/${article.slug}`}
              key={article.title}
              className="flex items-center gap-6 py-5 px-3 hover:bg-[#1A161E] lg:flex-col lg:items-start first:bg-[#1A161E] first:border-l-4 first:border-[#B6060F] border-l-4 border-transparent hover:border-[#B6060F]"
            >
              <Image src={article.cover} width={250} height={75} alt="cover" />
              <div>
                <h2 className="text-xl">{article.title}</h2>
                <p className="font-light">{article.desc}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogsTab;
