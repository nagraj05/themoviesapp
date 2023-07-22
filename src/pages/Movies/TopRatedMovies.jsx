import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import ButtonToTop from "../../components/ButtonToTop";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function TopRatedMovies() {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(1);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  function subtract() {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
    }
  }
  function add() {
    setCount((prevState) => prevState + 1);
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${count}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, [api_key, count]);

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
      <p className="text-white flex justify-center text-4xl font-ptsans mt-5">Top-Rated Movies</p>
      <div className="flex m-5 justify-center">
        <ArrowBackIosIcon
          onClick={subtract}
          className="text-white cursor-pointer rounded-md bg-nav p-2"
          style={{ fontSize: "32px" }}
        />
        <h1 className="text-white">{count}</h1>
        <ArrowForwardIosIcon
          onClick={add}
          className="text-white cursor-pointer bg-nav p-2"
          style={{ fontSize: "32px" }}
        />
      </div>
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
