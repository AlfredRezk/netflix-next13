
import { getMovies, getVideoKey, getMovieDetail } from "../../TMD";
import VideoSection from "@/app/components/VideoSection";

import Link from "next/link";

const MovieDetail = async ({ params: { movieId } }) => {
  let movieDetails = await getMovieDetail(movieId);
//   console.log(movieDetails);
  let videoKey = await getVideoKey(movieId);
  const { title , overview, genres, release_date} = movieDetails;

  return (
    <div className=" h-[55vh] relative md:container mx-auto text-white">
        <div className="flex-col ">
        <h1 className="text-center text-white text-4xl pt-20 pb-4">{title}</h1>
        <div className="flex gap-3 justify-center items-center mb-5">
            {genres.map(gen=>(<div key={gen.id} className="py-2 px-3 bg-slate-600 rounded-md">{gen.name}</div>))}
        </div>
        </div>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="flex flex-col items-center mt-3 md:mt-4 gap-3 p-3">

        <div className="p-10 bg-slate-800 mt-5 text-md text-white rounded-md flex flex-col gap-4">
            <h1 className="text-center text-3xl font-bold"> Overview</h1>
            <h2 className="text-center font-semibold italic text-lg">Release Date : {release_date}</h2>
            {overview}
        </div>
        <Link href="/movies" className="btn-light text-black">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;

export async function generateMetadata({ params: { movieId } }) {
  let movieDetails = await getMovieDetail(movieId);
  return {
    title: movieDetails.title,
    description: `This is the page of ${movieDetails.title}`,
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {

//   const movies = await getMovies("now_playing");

//   return movies.map((movie) => ({
//     movieId: movie.id.toString(),
//   }));
// }

export async function generateStaticParams() {
  const [movies1, movies2, movies3, movies4] = await Promise.all([
    getMovies("now_playing"),
    getMovies("popular"),
    getMovies("top_rated"),
    getMovies("upcoming"),
  ]);

  return [...movies1, ...movies2, ...movies3, ...movies4].map((movie) => ({
    movieId: movie.id.toString(),
  }));
}
