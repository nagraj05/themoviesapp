import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ButtonToTop from "./ButtonToTop"

export default function Episodes() {
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [title, setTitle] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const { id, season_number } = useParams();

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setTitle(data))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
        setEpisodes(data.episodes || []);
      })
      .catch((error) => console.log(error));
  }, [id, api_key, season_number]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className=" flex rounded-lg shadow-md bg-white p-4">
        <img
          src={baseUrl + title.poster_path}
          alt=""
          className="w-36 h-52 rounded-lg object-cover mr-4"
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold">{title.name}</h1>
          <p className="text-md text-gray-500 font-nunito">{title.overview}</p>
        </div>
      </div>
      <div className="mt-4 mx-10">
        <h4 className="text-2xl font-semibold text-white">{show.name}</h4>
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="border flex bg-white rounded-lg p-2 my-2"
          >
            <div className="flex gap-3 items-center">
              <img
                src={baseUrl + episode.still_path}
                alt=""
                className="w-36 h-52 rounded-lg object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  S{episode.season_number}E{episode.episode_number}{" "}
                  {episode.name}
                </h3>
                <p className="text-gray-500 mt-2 text-md">
                  Runtime: {episode.runtime}min
                </p>
                <p className="text-gray-500 mt-2 text-md w-4/5">
                  {episode.overview}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ButtonToTop />
      <Footer />
    </div>
  );
}
