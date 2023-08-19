import { useEffect, useMemo, useState } from "react";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const useCategorizedShows = (series) => {
  const shows = series;
  const [showsByCategory, setShowsByCategory] = useState([]);

  useEffect(() => {
    // Categorize shows by category
    const categorizedShows = shows?.reduce((result, show) => {
      show.categories.forEach((category) => {
        const existingCategory = result.find(
          (cat) => cat.category === category
        );
        if (existingCategory) {
          existingCategory.shows.push(show);
        } else {
          result.push({ category, shows: [show] });
        }
      });
      return result;
    }, []);

    categorizedShows?.forEach((item) => {
      shuffleArray(item.shows);
    });

    setShowsByCategory(categorizedShows);
  }, [shows]);

  return showsByCategory;
};

export default useCategorizedShows;
