import MyList from "@/components/MyList";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import React from "react";

const ProfileClient = ({ profile }) => {
  return (
    <div className="w-full flex flex-col pb-7">
      <ProfileHeader profile={profile} />
      <div className="px-16 md:px-5 flex flex-col gap-10">
        <MyList myList={profile.myList} />
      </div>
    </div>
  );
};

export default ProfileClient;
