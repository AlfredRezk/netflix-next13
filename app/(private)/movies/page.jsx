import React from "react";
import { getMovies } from "../TMD";
import HeroSection from "@/app/components/HeroSection";
import MovieSection from "@/app/components/MovieSection";


export const metadata = {
  title: "Movies",
  description: "a movie platform",
};

const Main = async () => {
  const movies = await getMovies("now_playing");

 
  return (
    <>
      <HeroSection movie={movies[0]}/>
      <div className="px-4 md:px-12 mt-4 pb-20">
        <MovieSection title="NOW PLAYING" type="now_playing" />
        <MovieSection title="POPULAR" type="popular" />
        <MovieSection title="TOP RATED" type="top_rated" />
        <MovieSection title="UPCOMING" type="upcoming" />
      </div>
    </>
  );
};

export default Main;
