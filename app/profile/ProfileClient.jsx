import ForYouList from "@/components/ForYouList";
import MyList from "@/components/MyList";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";

const ProfileClient = ({ profile, shows }) => {
  return (
    <div className="w-full flex flex-col pb-16">
      <ProfileHeader profile={profile} />
      <div className="px-16 md:px-5 flex flex-col gap-10">
        <MyList myList={profile.myList} shows={shows} />
        <ForYouList forYou={profile.forYou} shows={shows} />
      </div>
    </div>
  );
};

export default ProfileClient;
