"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = ({ type }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full p-16 md:py-16 md:px-5 uppercase">
      <Image
        src="/images/Oops! 404 Error with a broken robot-cuate.svg"
        width={300}
        height={300}
        alt="not found"
      />
      <h1 className="text-[7rem] font-bold">404</h1>
      <p>{type} not found </p>
      <button
        onClick={() => router.back()}
        className="bg-blue-500 py-4 w-36 rounded-md font-bold text-lg text-center sm:py-2 mt-5"
      >
        Back
      </button>
    </div>
  );
};

export default NotFound;
