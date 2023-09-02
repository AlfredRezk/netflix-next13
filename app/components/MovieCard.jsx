"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ poster_path, vote_average, title, release_date, id }) => {
  const router = useRouter();

  return (
    <Link
      className="w-40 h-[240px] relative cursor-pointer "
      href={`movies/${id}`}
    >
      <Image
        src={poster_path ? IMG_API + poster_path : defaultImage}
        width={160}
        height={240}
        alt="movie-card"
        className="brightness-[80%] hover:brightness-100 transition border-2   border-transparent hover:border-white"
        title={title}
      />
      <span className="absolute top-1 right-1 text-white font-semibold z-10 drop-shadow-md">
        {vote_average.toFixed(1)}
      </span>
    </Link>
  );
};

export default MovieCard