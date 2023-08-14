import React from "react";
import ProfileHeaderImage from "./ProfileHeaderImage";
import ProfileHeaderTitle from "./ProfileHeaderTitle";

const ProfileHeade = ({ profile }) => {
  return (
    <>
      <ProfileHeaderImage cover={profile.cover} />
      <div className="w-full flex flex-col p-16 md:py-16 md:px-5 mt-[-250px] gap-3">
        <ProfileHeaderTitle title={profile.name} />
      </div>
    </>
  );
};

export default ProfileHeade;
