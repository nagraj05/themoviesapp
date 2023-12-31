import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GradeIcon from "@mui/icons-material/Grade";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ButtonToTop from "./ButtonToTop";
import { Link } from "react-router-dom";

export default function Moviedetails() {
  const [details, setDetails] = useState([]);
  const [cast, setCast] = useState([]);
  const [reco, setReco] = useState([]);
  const [video, setVideo] = useState([]);
  const [crew, setCrew] = useState([]);
  const [providers, setProviders] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setCast(data.cast))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setCrew(data.crew))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setReco(data.results))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setVideo(data.results))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setProviders(data))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  if (!details) {
    return <div>Movie not found</div>;
  }

  const convertRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const truncateReco = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.substring(0, maxLength) + "...";
  };

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
              {details.title}{" "}
              <span className="font-mono">
                ({new Date(details.release_date).getFullYear()})
              </span>
            </h2>
            {details.tagline && (
              <p className="text-gray-500 text-xl p-3 italic font-ptsans rounded-md my-1">
                {details.tagline}
              </p>
            )}
            <div className="flex bg-nav p-3 my-1 rounded-xl justify-around">
              <div>
                <AccessTimeIcon className="text-white" />
                <p className="text-white font-rob">
                  {convertRuntime(details.runtime)}
                </p>
              </div>
              <div>
                <GradeIcon className="text-white" />
                <p className="text-white font-rob">
                  {details.vote_average && details.vote_average.toFixed(1)}
                </p>
              </div>
              <div>
                <CalendarMonthIcon className="text-white" />
                <p className="text-white font-rob">
                  {formatDate(details.release_date)}
                </p>
              </div>
              <div>
                <PaidIcon className="text-white" />
                <p className="text-white font-rob">
                  {details.budget && details.budget.toLocaleString()}$
                </p>
              </div>
              <div>
                <AttachMoneyIcon className="text-white" />
                <p className="text-white font-rob">
                  {details.revenue && details.revenue.toLocaleString()}$
                </p>
              </div>
              <div>
                <NewspaperIcon className="text-white" />
                <p className="text-white font-rob">
                  {details.original_language &&
                    details.original_language.charAt(0).toUpperCase() +
                      details.original_language.slice(1)}
                </p>
              </div>
            </div>
            {details.genres && (
              <p className="text-white bg-nav p-3 font-nunito rounded-xl my-1">
                Genre:{details.genres.map((genre) => genre.name).join(", ")}
              </p>
            )}
            {details.overview && (
              <p className="text-white rounded-xl font-nunito font-normal p-4 bg-nav my-2 ">
                {details.overview}
              </p>
            )}
            <p className="text-white rounded-xl font-nunito font-normal p-4 bg-nav my-2 ">
              Director :{" "}
              {crew
                .filter((person) => person.job === "Director")
                .map((person) => person.name)
                .join(", ")}
            </p>
            {providers.results?.IN?.flatrate && (
              <div className="flex items-center rounded-lg mt-4 bg-white now-streaming-container">
                {providers.results?.IN?.flatrate.map((provider) => (
                  <img
                    src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                    key={provider.provider_id}
                    alt=""
                    className="w-16 h-16 object-contain m-2 border  border-red-600 "
                  />
                ))}
                <div className="flex flex-col items-center ml-5">
                  <p className="text-gray-500 font-ptsans text-3xl">
                    Now Streaming
                  </p>
                  <p className="text-black font-rob font-medium text-lg">
                    Watch Now
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* CAST */}
      <div>
        <h3 className="text-white text-4xl font-nunito px-8 pt-2">Cast</h3>
        <div className="flex overflow-x-auto mx-4 scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
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
                  <p className="text-gray-400 p-4 font-ptsans py-1">
                    {person.character}
                  </p>
                </Link>
              );
            }
            return null;
          })}
        </div>
      </div>
      {/*Collection */}
      {details.belongs_to_collection && (
        <div className="relative h-80 mx-10 my-5">
          {details.belongs_to_collection && (
            <div
              className="absolute w-full h-80 px-10 bg-no-repeat bg-cover rounded-2xl"
              style={{
                backgroundImage: `url(${
                  baseUrl + details.belongs_to_collection.backdrop_path
                })`,
              }}
            />
          )}
          <div className="absolute top-0 left-0 w-full h-full bg-black rounded-2xl bg-opacity-50 flex flex-col items-center justify-center">
            {details.belongs_to_collection && (
              <div className="text-white text-4xl font-nunito mb-4">
                {details.belongs_to_collection.name}
              </div>
            )}
            <div className="flex flex-col items-center">
              {details.belongs_to_collection && (
                <Link to={`/collection/${details.belongs_to_collection.id}`}>
                  <button className="text-white bg-blue-500 font-nunito px-6 py-3 rounded-lg">
                    View the collection
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Trailers */}
      {video.length > 0 && (
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
                      <p className="text-white font-ptsans m-2">{movie.type}</p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
      {/*Crew*/}
      {crew.length > 0 && (
        <div>
          <h3 className="text-white text-4xl font-nunito px-8 pt-4  ">Crew</h3>
          <div className="flex overflow-x-auto mx-4 scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
            {crew.map((person) => {
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
                    <p className="text-gray-400 px-2 pb-2 font-ptsans ">
                      {person.job}
                    </p>
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
      {/* Recommendations */}
      {reco.length > 0 && (
        <div>
          <h3 className="text-white text-4xl mx-7 my-5">Recommendations</h3>
          <div className="flex">
            {reco.slice(0, 3).map((movie) => (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="cursor-pointer"
              >
                <div className="w-60 border border-gray-500 mx-7 my-3 ">
                  <img
                    src={baseUrl + movie.poster_path}
                    alt=""
                    className="h-64 w-60"
                  />
                  <div>
                    <h4 className="text-white font-ptsans text-lg  m-2">
                      {truncateReco(movie.original_title, 22)}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <ButtonToTop />
      <Footer />
    </div>
  );
}
