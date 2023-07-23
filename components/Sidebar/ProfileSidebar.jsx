import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import MainProfileSidebar from "./MainProfileSidebar";
import PlatformSidebar from "./PlatformSidebar";

const ProfileSidebar = ({ platforms }) => {
  return (
    <>
      <LeftSidebar>
        <PlatformSidebar platforms={platforms} />
      </LeftSidebar>
      <RightSidebar>
        <MainProfileSidebar />
      </RightSidebar>
    </>
  );
};

export default ProfileSidebar;
