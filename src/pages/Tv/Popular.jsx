import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import ButtonToTop from "../../components/ButtonToTop";

function Popular() {
  const [popularShows, setPopularShows] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setPopularShows(data.results))
      .catch((error) => console.log(error));
  }, [api_key]);

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <Navbar />
      <p className="text-white flex justify-center text-4xl font-ptsans mt-5">Popular Shows</p>
      <div className="flex flex-wrap justify-center items-center">
        {popularShows.map((show) => (
          <Link
            key={show.id}
            to={`/tv/${show.id}`}
          >
            <div className="w-60 border border-gray-500 mx-5 my-3 ">
              <img
                src={baseUrl + show.poster_path}
                alt=""
                className="h-64 w-60"
              />
              <div>
                <h4 className="text-white font-ptsans  m-2">{show.name}</h4>
                <p className="text-white  m-2">IMDb: {show.vote_average}/10</p>
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

export default Popular;
