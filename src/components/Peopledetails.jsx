import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";
import ButtonToTop from "./ButtonToTop";
import twitter from "../assets/socials/tweetoutline.png";
import instagram from "../assets/socials/instaoutline.png";
import imdb from "../assets/socials/imdb.png"


export default function Peopledetails() {
  const [people, setPeople] = useState([]);
  const [credits, setCredits] = useState([]);
  const [tvcredits, setTvCredits] = useState([]);
  const [socials, setSocials] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setCredits(data.cast))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setTvCredits(data.cast))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setSocials(data))
      .catch((error) => console.log(error));
  }, [api_key, id]);

  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.substring(0, maxLength) + "...";
  };

  const truncateName = (name, maxLength) => {
    if (name.length <= maxLength) {
      return name;
    }
    return name.substring(0, maxLength) + "...";
  };

  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  const filteredCredits =
    credits && credits.filter((movie) => movie.title && movie.poster_path);

  return (
    <div>
      <Navbar />
      <div className="flex mx-20 my-5 relative z-10">
        <img
          src={baseUrl + people.profile_path}
          alt=""
          className="h-500 w-350 rounded-lg"
        />
        <div className="flex absolute left-0 mt-4" style={{ top: "500px" }}>
          {socials.twitter_id && (
            <a
              href={`https://twitter.com/${socials.twitter_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className="h-8 w-8 mr-4" />
            </a>
          )}
          {socials.instagram_id && (
            <a
              href={`https://www.instagram.com/${socials.instagram_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="h-8 w-8 mr-4" />
            </a>
          )}
          {socials.imdb_id && (
            <a
              href={`https://www.imdb.com/name/${socials.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imdb} alt="Instagram" className="h-8 w-8" />
            </a>
          )}
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="flex flex-col m-5">
            <h2 className="text-white font-nunito text-4xl">{people.name}</h2>
            <p className="text-white  bg-nav p-3 font-nunito rounded-xl my-1">
              🍰 - {formatDate(people.birthday)} (
              {calculateAge(people.birthday)} years)
            </p>
            {people.place_of_birth && (
              <p className="text-white  bg-nav p-3 font-nunito rounded-xl my-1">
                🏡 - {people.place_of_birth}
              </p>
            )}
            {people.deathday && (
              <p className="text-white bg-nav p-3 font-nunito">
                Death : {people.deathday}
              </p>
            )}
            {people.biography && (
              <div className="text-white  bg-nav p-3 font-nunito rounded-xl my-1">
                {people.biography.split("\n").map((paragraph, index) => (
                  <p key={index} className="mt-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
          {filteredCredits.length > 0 && (
            <div className="flex flex-col">
              <h3 className="text-white mx-6 font-nunito text-lg">
                Known For Movies:
              </h3>
              <div className="flex overflow-x-auto m-4 scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
                {filteredCredits.map((movie) => (
                  <Link
                    key={movie.id}
                    to={`/movie/${movie.id}`}
                    className="flex flex-col items-center mx-2 my-5 bg-nav rounded-lg w-52"
                  >
                    {movie.poster_path && (
                      <img
                        src={baseUrl + movie.poster_path}
                        alt=""
                        className="w-52 h-42 mx-20 p-4 object-cover rounded-lg"
                      />
                    )}
                    <p className="text-white text-base p-4 font-nunito">
                      {truncateTitle(movie.title, 15)}
                    </p>
                    <p className="text-gray-400 mb-4 font-nunito">{movie.character}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {tvcredits.length > 0 && (
            <div className="flex flex-col">
              <h3 className="text-white mx-6 font-nunito text-lg">
                Known For Tv Shows:
              </h3>
              <div className="flex overflow-x-auto m-4 scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
                {tvcredits.map((movie) => (
                  <Link
                    key={movie.id}
                    to={`/tv/${movie.id}`}
                    className="flex flex-col items-center mx-2 my-5 bg-nav rounded-lg w-52"
                  >
                    {movie.poster_path && (
                      <img
                        src={baseUrl + movie.poster_path}
                        alt=""
                        className="w-52 h-42 mx-20 p-4 object-cover rounded-lg"
                      />
                    )}
                    <p className="text-white text-base p-4 font-nunito">
                      {truncateName(movie.name, 15)}
                    </p>
                    <p className="text-gray-400 mb-4 font-nunito">{movie.character}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <ButtonToTop />
      <Footer />
    </div>
  );
}
