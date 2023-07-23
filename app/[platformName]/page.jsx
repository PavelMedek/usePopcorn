"use client";

import { useRouter } from "next/navigation";

import { platforms } from "@/lib/data";

const Page = ({ params }) => {
  const name = params.platformName;
  const router = useRouter();

  const platform = platforms.find((el) => el.name === params.platformName);

  if (!platform) {
    return <div>No platform</div>;
  }

  return (
    <div className="">
      <p>{name}</p>
    </div>
  );
};

export default Page;
