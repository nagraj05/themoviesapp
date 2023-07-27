import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ButtonToTop from "./ButtonToTop"

export default function SeasonsDetails() {
  const [seasons, setSeasons] = useState([]);
  const [show, setShow] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
        setSeasons(data.seasons);
      })
      .catch((error) => console.log(error));
  }, [id, api_key]);

  return (
    <div>
      <Navbar />
      <div className="flex gap-5 rounded-lg shadow-md bg-white p-4">
        <img
          src={baseUrl + show.poster_path}
          alt=""
          className="w-36 h-52 rounded-lg object-cover mr-4"
        />
        <div className="flex flex-col gap-5 ">
          <h2 className="text-xl font-semibold">{show.name}</h2>
          <p className="text-gray-500 text-md mt-5">{show.overview}</p>
          <p className="font-nunito text-lg">
            Seasons: {show.number_of_seasons}
          </p>
        </div>
      </div>
      <div className="mt-4 mx-10">
        {seasons.map((season) => (
          <Link
            key={season.id}
            to={`/tv/seasons/episodes/${id}/${season.season_number}`}
            className="border flex bg-white rounded-lg p-2 my-2"
          >
            <img
              src={`${baseUrl}${season.poster_path}`}
              alt=""
              className="w-36 h-52 rounded-lg object-cover mr-4"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold">
                {season.name}{" "}
                <span className="font-mono">
                  ({new Date(season.air_date).getFullYear()})
                </span>
              </h3>
              <p className="text-gray-500 mt-2">
                Episodes: {season.episode_count}
              </p>
              <p className="text-gray-500 mt-2 text-md">{season.overview}</p>
            </div>
          </Link>
        ))}
      </div>
      <ButtonToTop />
      <Footer />
    </div>
  );
}
