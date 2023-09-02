"use client";

import UserCard from "@/app/components/UserCard";
import { profileImages } from "@/config/constants";
import { useAuth } from "@/context/AuthContext";

const Profiles = () => {
  const {  currentUser } = useAuth();

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-8 mt-10 md:flex-row">
        {profileImages.map((image, index) => (
          <UserCard key={index} image={index==0&&currentUser? currentUser?.photoURL:image} name={index==0&&currentUser? currentUser?.displayName : `Guest - ${index+1}`} />
        ))}
      </div>
    </div>
  );
};

export default Profiles;
