import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import ButtonToTop from "../../components/ButtonToTop";

export default function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
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
      <p className="text-white flex justify-center text-4xl font-ptsans mt-5">Popular Movies</p>
      <div className="flex flex-wrap justify-center items-center">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="w-60 border rounded-md border-gray-500 mx-5 my-3 ">
              <img
                src={baseUrl + movie.poster_path}
                alt=""
                className="h-64 w-60 rounded-md"
              />
              <div>
                <h4 className="text-white font-nunito  m-2">
                  {truncateTitle(movie.original_title, 28)}
                </h4>
                <p className="text-white font-nunito  m-2">Rating : {movie.vote_average}/10</p>
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
