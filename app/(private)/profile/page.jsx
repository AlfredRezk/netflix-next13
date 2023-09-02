import Profiles from "./Profiles";

export const metadata = {
  title: "Profile",
  description: "this is profile page",
};

const ProfilePage = () => {

  return (
    <div className="flex items-center justify-center pt-40">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center"> Who's watching? </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
            <Profiles/>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
