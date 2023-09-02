"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UserCard = ({ name, image }) => {
  let router = useRouter();
  return (
    <div
      className="w-44 mx-auto cursor-pointer group"
      onClick={() => router.push("/movies")}
    >
      <div className="rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white ">
        <Image
          draggable={false}
          className="w-full h-max object-contain "
          src={image}
          alt={`${name} image`}
          width={175}
          height={175}
        />
      </div>
      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">{name}
      </div>
    </div>
  );
};
export default UserCard;
