


import { getMovies } from "../(private)/TMD";
import MovieList from "./MovieList";



const MovieSection = async ({ title, type }) => {

  const movies = await getMovies(type);
  // const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  // const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <div className="my-20">
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
        {title}
      </p>
      <MovieList movies={movies}/>
    </div>
  );
};

export default MovieSection;