import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [showTvList, setShowTvList] = useState(false);
  const [showMovieList, setShowMovieList] = useState(false)

  const handleTvClick = () => {
    setShowTvList(!showTvList);
  };

  const handleMovieClick = () =>{
    setShowMovieList(!showMovieList);
  };

  return (
    <div className="flex justify-between items-center bg-nav py-5 font-rob font-semibold">
      <h1 className="px-20 text-lg text-white">The Movies App</h1>
      <div className="">
        <ul className="flex justify-between space-x-9 mx-4 px-20 text-white font-rob font-semibold cursor-pointer ">
          <li className="hover:text-red-700">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-red-700 relative" onClick={handleMovieClick}>
            <span>MOVIES</span>
            {showMovieList && (
              <ul className="absolute bg-white text-black rounded-md p-2 space-y-2 mt-1 z-50">
                <li className="hover:text-red-700 border-b border-gray-300 ">
                  <Link to="/movie/now-playing">Now Playing</Link>
                </li>
                <li className="hover:text-red-700 border-b border-gray-300">
                  <Link to="/movie/popular-movies">Popular</Link>
                </li>
                <li className="hover:text-red-700 border-b border-gray-300">
                  <Link to="/movie/top-rated">Top Rated</Link>
                </li>
                <li className="hover:text-red-700 border-b border-gray-300">
                  <Link to="/movie/upcoming-movies">Upcoming</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-red-700 relative" onClick={handleTvClick}>
            <span>TV SHOWS</span>
            {showTvList && (
              <ul className="absolute bg-white text-black rounded-md p-2 space-y-2 mt-1 z-50">
                <li className="hover:text-red-700 border-b border-gray-300 ">
                  <Link to="/tv/popular">Popular</Link>
                </li>
                <li className="hover:text-red-700 border-b border-gray-300">
                  <Link to="/tv/on-the-air">On the Air</Link>
                </li>
                <li className="hover:text-red-700 border-b border-gray-300">
                  <Link to="/tv/airing-today">Airing Today</Link>
                </li>
                <li className="hover:text-red-700 border-b border-gray-300">
                  <Link to="/tv/top-rated">Top Rated</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-red-700">
            <Link to="/lists">LISTS</Link>
          </li>
          <li className="hover:text-red-700">
            <Link to="/people">PEOPLE</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
