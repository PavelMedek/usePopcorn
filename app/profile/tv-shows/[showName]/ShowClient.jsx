"use client";

import AdminHeading from "@/components/AdminComponents/AdminHeading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ShowClient = ({ show, params }) => {
  const router = useRouter();

  if (!show || !show.episodes) {
    return (
      <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
        <AdminHeading
          text="Episodes"
          handleClick={() => router.push(`${params.showName}/add`)}
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <AdminHeading
        text="Episodes"
        handleClick={() => router.push(`${params.showName}/add`)}
      />
      <div className="flex flex-col gap-5">
        {show.episodes?.map((episode) => (
          <div key={episode.slug}>
            <div className="flex justify-between items-center bg-[#1A161E] py-3 px-5 md:flex-col md:items-start gap-3">
              <div className="flex gap-5 items-center">
                <Image
                  src={episode.thumbnail}
                  width={150}
                  height={75}
                  alt={episode.slug}
                />
                <h3>{episode.name}</h3>
              </div>
              <div className="flex gap-5 md:justify-between md:w-full">
                <button className="bg-blue-500 py-2 px-3 rounded-md md:w-full">
                  Edit Episode
                </button>
                <button className="bg-red-500 py-2 px-3 rounded-md md:w-full">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowClient;
