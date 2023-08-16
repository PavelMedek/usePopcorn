import React from "react";
import BlogsClient from "./BlogsClient";
import { platforms } from "@/lib/data";
import NotFound from "@/components/NotFound";

const BlogsPage = () => {
  if (!platforms || platforms.length === 0) {
    return <NotFound type="blogs" />;
  }

  return <BlogsClient platforms={platforms} />;
};

export default BlogsPage;
