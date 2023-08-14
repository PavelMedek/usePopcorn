import MainProfileSidebar from "./MainProfileSidebar";
import PlatformSidebar from "./PlatformSidebar";
import LeftSidebarContainer from "./LeftSidebarContainer";
import RightSidebarContainer from "./RightSidebarContainer";

const ProfileSidebar = ({ platforms, profile }) => {
  return (
    <>
      <LeftSidebarContainer>
        <PlatformSidebar platforms={platforms} profile={profile} />
      </LeftSidebarContainer>
      <RightSidebarContainer>
        <MainProfileSidebar />
      </RightSidebarContainer>
    </>
  );
};

export default ProfileSidebar;
