"use client";

import AdminHeading from "@/components/AdminComponents/AdminHeading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PlatformsClient = ({ platforms }) => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <AdminHeading
        text="Platforms"
        handleClick={() => router.push("platforms/add")}
      />

      <div className="flex flex-col gap-5">
        {platforms.map((platform, index) => (
          <div key={index}>
            <div className="flex justify-between items-center bg-[#1A161E] py-3 px-5">
              <div className="flex gap-5 items-center">
                <Image
                  src={platform.image}
                  width={50}
                  height={50}
                  alt={platform.name}
                />
                <p>{platform.name}</p>
              </div>
              <div className="flex gap-5">
                <button className="bg-blue-500 py-2 px-3 rounded-md">
                  Edit
                </button>
                <button className="bg-red-500 py-2 px-3 rounded-md">
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

export default PlatformsClient;
