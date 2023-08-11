"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NotFound = ({ type }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase w-full p-16 md:py-16 md:px-5 gap-10">
      <p>No {type} </p>
      <button
        onClick={() => router.back()}
        className="bg-blue-500 py-4 w-36 rounded-md font-bold text-lg text-center uppercase sm:py-2"
      >
        Back
      </button>
    </div>
  );
};

export default NotFound;
