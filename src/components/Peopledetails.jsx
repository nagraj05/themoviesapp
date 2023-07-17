import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";

export default function Peopledetails() {
  const [people, setPeople] = useState([]);
  const [credits, setCredits] = useState([]);

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
  const handleMoviesClick = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setCredits(data.cast))
      .catch((error) => console.log(error));
  }, [id, api_key]);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  const filteredCredits = credits.filter((movie) => movie.title);

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substr(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div>
      <Navbar />
      <div className="flex mx-20 my-5 relative z-10">
        <img
          src={baseUrl + people.profile_path}
          alt=""
          className="h-500 w-350 rounded-lg"
        />
        <div className="flex flex-col overflow-hidden">
          <div className="flex flex-col m-5">
            <h2 className="text-white font-nunito text-4xl">
              {people.name}
            </h2>
            <p className="text-white  bg-nav p-3 font-nunito rounded-xl my-1">
              🍰 - {formatDate(people.birthday)} (
              {calculateAge(people.birthday)} years)
            </p>
            <p className="text-white  bg-nav p-3 font-nunito rounded-xl my-1">
              🏡 - {people.place_of_birth}
            </p>
            <p className="text-white">{people.deathday}</p>
            <div className="text-white  bg-nav p-3 font-nunito rounded-xl my-1">
              {people.biography &&
                people.biography.split("\n").map((paragraph, index) => (
                  <p key={index} className="mt-2">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white mx-6 font-nunito text-lg">
              Known For:
            </h3>

            <div className="flex overflow-x-auto m-4 scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {filteredCredits.map((movie) => (
                <Link
                  key={movie.id}
                  to={`/movie/${movie.id}`}
                  onClick={handleMoviesClick}
                  className="flex flex-col items-center mx-2 my-5 bg-nav rounded-lg w-52"
                >
                  {movie.poster_path && (
                    <img
                      src={baseUrl + movie.poster_path}
                      alt=""
                      className="w-52 h-42 mx-20 p-4 object-cover rounded-lg"
                    />
                  )}
                  <p className="text-white text-base p-4 font-ptsans">
                    {truncateTitle(movie.title, 30)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
