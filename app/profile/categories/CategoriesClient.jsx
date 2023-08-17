"use client";

import AdminHeading from "@/components/AdminComponents/AdminHeading";
import { useRouter } from "next/navigation";

const CategoriesClient = ({ allCategories }) => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <AdminHeading
        text="Categories"
        handleClick={() => router.push("categories/add")}
      />
      <ul className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-4 gap-3">
        {allCategories.map((category, index) => (
          <li className="bg-[#1A161E] p-3 " key={index}>
            <div className="flex justify-between items-center">
              <p>{category}</p>
              <button className="bg-red-500 py-2 px-3 rounded-md">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesClient;
