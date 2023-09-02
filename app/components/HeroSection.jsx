import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { getVideoKey } from "@/app/(private)/TMD";
import Link from "next/link";
import VideoSection from "./VideoSection";


const HeroSection = async ({ movie }) => {
  let videoKey = await getVideoKey(movie?.id);


  return (
    <div className=" h-[60vh] w-full relative md:h-screen">
   <VideoSection videoKey={videoKey}/>
      <div className="absolute ml-4 md:ml-16 top-[70%]">
        <div>
          <p className="text-white text-1xl md:text-5xl h-full max-w-xl lg:text-6xl font-bold drop-shadow-xl">
            {movie?.title}
          </p>
          <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
            {movie?.overview}
          </p>
          <Link href={`/movies/${movie?.id}`} className="btn-light">
            <PlayIcon className="w-4 md:w-7 text-black mr-1" />
            Play
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
