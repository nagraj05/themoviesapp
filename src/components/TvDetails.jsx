import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ButtonToTop from "./ButtonToTop";

export default function TvDetails() {
  const [details, setDetails] = useState([]);
  const [cast, setCast] = useState([]);
  const [video, setVideo] = useState([]);
  const [reco, setReco] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();

  const handleRecommendationClick = () => {
    window.location.hash = "#top";
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setCast(data.cast))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setVideo(data.results))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setReco(data.results))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  if (!details) {
    return <div>Show not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div
        className=" flex flex-col relative mx-0 h-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${baseUrl + details.backdrop_path})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
        <div className="flex mx-20 my-5 relative z-10">
          <img
            src={baseUrl + details.poster_path}
            alt=""
            className="h-500 w-350 rounded-lg"
          />
          <div className="flex flex-col m-5">
            <h2 className="text-white font-nunito text-4xl">
              {details.name}{" "}
              <span className="font-mono">
                ({new Date(details.first_air_date).getFullYear()})
              </span>
            </h2>
            {details.tagline && (
              <p className="text-gray-500 text-xl p-3 italic font-ptsans rounded-md my-1">
                {details.tagline}
              </p>
            )}
            {details.genres && details.genres.length > 0 && (
              <p className="text-white bg-nav p-3 font-nunito rounded-xl my-1">
                Genre:{" "}
                {details.genres.map((genre) => genre.name).join(", ")}
              </p>
            )}
            <p className="text-white rounded-xl font-nunito font-normal p-4 bg-nav my-2">
              {details.overview}
            </p>
          </div>
        </div>
      </div>
      {/*Cast */}
      <div>
        <h3 className="text-white text-4xl mx-7 my-5">Cast</h3>
        <div className="flex overflow-x-auto m-5 scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
          {cast.map((person) => {
            if (person.profile_path) {
              return (
                <Link
                  to={`/people/${person.id}`}
                  key={person.id}
                  className="flex flex-col items-center mx-2 my-5 bg-nav rounded-lg w-52"
                >
                  <img
                    src={`${baseUrl + person.profile_path}`}
                    alt={person.name}
                    className="w-52 h-42 mx-24 p-4   object-cover rounded-lg"
                  />
                  <p className="text-white text-lg font-ptsans">
                    {person.name}
                  </p>
                  <p className="text-gray-400 font-ptsans py-1">
                    {person.character}
                  </p>
                </Link>
              );
            }
            return null;
          })}
        </div>
      </div>
      {/*Trailers*/}
      <div>
        <h3 className="text-white text-4xl mx-7 my-5">
          Trailers & Behind the Scenes
        </h3>
        <div className="flex overflow-x-auto m-5 scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray ">
          {video.map((movie) => {
            if (movie.type === "Trailer") {
              return (
                <div key={movie.id} className="flex-none mx-3 my-3">
                  <div className="flex flex-nowrap">
                    <iframe
                      title={movie.name}
                      height="250"
                      width="350"
                      src={`https://www.youtube.com/embed/${movie.key}`}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div>
                    <h4 className="text-white font-ptsans text-lg m-2">
                      {movie.name}
                    </h4>
                    <p className="text-white font-ptsans m-2">
                      {movie.type}
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      {/*Recommendations*/}
      <div>
        <h3 className="text-white text-4xl mx-7 my-5">Recommendations</h3>
        <div className="flex">
          {reco.slice(0, 3).map((show) => (
            <Link
              key={show.id}
              to={`/tv/${show.id}`}
              className="cursor-pointer"
              onClick={handleRecommendationClick}
            >
              <div className="w-60 border border-gray-500 mx-7 my-3 ">
                <img
                  src={baseUrl + show.poster_path}
                  alt=""
                  className="h-64 w-60"
                />
                <div>
                  <h4 className="text-white font-ptsans text-lg  m-2">
                    {show.name}
                  </h4>
                  <p className="text-white font-ptsans  m-2">
                    IMDb: {show.vote_average && show.vote_average.toFixed(1)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ButtonToTop />
      <Footer />
    </div>
  );
}
