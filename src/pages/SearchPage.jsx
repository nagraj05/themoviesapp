import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Footer from "../components/Footer";

export default function SearchPage() {
  const [search, setSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const baseUrl = "https://image.tmdb.org/t/p/w500";

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

  return (
    <div>
      <Navbar />
      <Search onSearch={setSearchQuery} />
      {searchQuery ? (
        <div className="flex flex-col p-4">
          <h3 className="text-white text-2xl font-ptsans mx-7 my-5">
            Search Results
          </h3>
          <div className="flex flex-wrap">
            {search.results &&
              search.results.map((item) => {
                if (item.media_type === "movie") {
                  return (
                    <Link key={item.id} to={`/movie/${item.id}`}>
                      <div className="w-40 border border-gray-500 rounded-lg mx-5 my-3">
                        <img
                          src={baseUrl + item.poster_path}
                          alt=""
                          className="h-54 w-40 rounded-lg"
                        />
                      </div>
                    </Link>
                  );
                } else if (item.media_type === "tv") {
                  return (
                    <Link key={item.id} to={`/tv/${item.id}`}>
                      <div className="w-40 border border-gray-500 rounded-lg mx-5 my-3">
                        <img
                          src={baseUrl + item.poster_path}
                          alt=""
                          className="h-54 w-40 rounded-lg"
                        />
                      </div>
                    </Link>
                  );
                } else if (item.media_type === "person") {
                  return (
                    <Link key={item.id} to={`/people/${item.id}`}>
                      <div className="w-40 border border-gray-500 rounded-lg mx-5 my-3">
                        <img
                          src={baseUrl + item.profile_path}
                          alt=""
                          className="h-54 w-40 rounded-lg"
                        />
                      </div>
                    </Link>
                  );
                } else {
                  return null;
                }
              })}
          </div>
        </div>
      ) : (
        <div className="flex justify-center h-96 items-center ">
          <h2 className="text-gray-400 text-3xl font-ptsans ">
            Search for Movies, Shows & People...
          </h2>
        </div>
      )}
      <Footer />
    </div>
  );
}
