import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

export default function Home() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    if (searchQuery) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&api_key=${api_key}`
      )
        .then((response) => response.json())
        .then((data) => setSearch(data))
        .catch((error) => console.log(error));
    }
  }, [api_key, searchQuery]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setUpcoming(data.results))
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, [api_key]);

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <Navbar />
      <Search onSearch={setSearchQuery} />
      <div className="flex">
        {/* <div className="w-1/5 bg-gray-200 p-4">
          <h2 className="font-bold text-lg mb-4">Genres</h2>
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>
                <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
              </li>
            ))}
          </ul>
        </div> */}
        {searchQuery && (
        <div className="flex flex-col p-4">
          <h3 className="text-white text-4xl mx-7 my-5">Search Results</h3>
          <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
            {search.results &&
              search.results.map((item) => (
                <Link key={item.id} to={`/movie/${item.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-5 my-3">
                    <img
                      src={baseUrl + item.poster_path}
                      alt=""
                      className="h-54 w-40 rounded-lg"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
        )}
        <div className="flex flex-col overflow-hidden   ">
          <div className="p-6">
            <h3 className="text-white text-4xl mx-7 my-5">Upcoming</h3>
            <div className="flex overflow-x-scroll  scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {upcoming.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-5 my-3">
                    <img
                      src={baseUrl + movie.poster_path}
                      alt=""
                      className="h-54 w-40 rounded-lg"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-4xl mx-7 my-5">Popular</h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {movies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-5 my-3">
                    <img
                      src={baseUrl + movie.poster_path}
                      alt=""
                      className="h-54 w-40 rounded-lg"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
