"use client";

import ForYouList from "@/components/ForYouList";
import MyList from "@/components/MyList";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import useFilteredPlatforms from "@/hooks/useFilteredPlatforms";
import React from "react";

const ProfileClient = ({ profile }) => {
  return (
    <div className="w-full flex flex-col pb-16">
      <ProfileHeader profile={profile} />
      <div className="px-16 md:px-5 flex flex-col gap-10">
        <MyList myList={profile.myList} />
        <ForYouList />
      </div>
    </div>
  );
};

export default ProfileClient;
