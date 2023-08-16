import { platforms } from "@/lib/data";
import React from "react";
import CategoriesClient from "./CategoriesClient";
import NotFound from "@/components/NotFound";

const page = () => {
  const allCategories = platforms?.reduce((categories, platform) => {
    platform.series.forEach((series) => {
      series.categories.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    });
    return categories;
  }, []);

  if (!platforms || platforms.length === 0) {
    return <NotFound type="blogs" />;
  }

  return <CategoriesClient allCategories={allCategories} />;
};

export default page;
