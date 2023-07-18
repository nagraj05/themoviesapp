import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import ButtonToTop from "../../components/ButtonToTop";

export default function UpcomingMovies() {
  const [movies, setMovies] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, [api_key]);

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.substring(0, maxLength) + "...";
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="w-60 border border-gray-500 mx-5 my-3 ">
              <img
                src={baseUrl + movie.poster_path}
                alt=""
                className="h-64 w-60"
              />
              <div>
                <h4 className="text-white font-ptsans  m-2">
                {truncateTitle(movie.original_title, 28)}
                </h4>
                <p className="text-white  m-2">IMDb: {movie.vote_average}/10</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ButtonToTop />
      <Footer />
    </div>
  );
}
