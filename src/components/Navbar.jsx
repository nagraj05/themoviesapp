import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/title.png";
import { useRef } from "react";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMovieList, setShowMovieList] = useState(false);
  const [showTvlist, setShowTvList] = useState(false);

  const movieDropdownRef = useRef(null);
  const tvDropdownRef = useRef(null);

  const handleTvClick = () => {
    setShowTvList(!showTvlist);
    setShowMovieList(false);
  };

  const handleMovieClick = () => {
    setShowMovieList(!showMovieList);
    setShowTvList(false);
  };

  const handleClickOutside = (event) => {
    if (
      movieDropdownRef.current &&
      !movieDropdownRef.current.contains(event.target)
    ) {
      setShowMovieList(false);
    }
    if (
      tvDropdownRef.current &&
      !tvDropdownRef.current.contains(event.target)
    ) {
      setShowTvList(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center bg-nav py-5 font-rob font-semibold">
      <div>
        <img src={logo} alt="Logo" className="h-12 mx-20" />
      </div>
      <div className="relative">
        <button
          className="block lg:hidden text-white hover:text-red-700 focus:outline-none mx-16"
          onClick={handleMenuClick}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                className="fill-red-700"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            ) : (
              <path
                className="fill-white"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute lg:hidden bg-white text-black rounded-md p-4 space-y-2 mx-1 z-50 flex">
            <ul className="flex flex-col items-center">
              <li className="hover:text-red-700">
                <Link to="/">HOME</Link>
              </li>
              <li className="text-sm py-2">
                <Link to="/movie/now-playing">Now Playing</Link>
              </li>
              <li className="text-sm py-2">
                <Link to="/movie/popular-movies">Popular Movies</Link>
              </li>
              <li className="text-xs py-2">
                <Link to="/movie/top-rated">Top Rated Movies</Link>
              </li>
              <li className="text-sm py-2">
                <Link to="/movie/upcoming-movies">UpcomingMovies</Link>
              </li>
              <li className="text-sm py-2">
                <Link to="/tv/popular">Popular Shows</Link>
              </li>
              <li className="text-xs py-2">
                <Link to="/tv/on-the-air">On the Air Shows</Link>
              </li>
              <li className="text-xs py-2">
                <Link to="/tv/airing-today">Airing Today Shows</Link>
              </li>
              <li className="text-sm py-2">
                <Link to="/tv/top-rated">Top Rated Shows</Link>
              </li>
              <li className="text-sm py-2">
                <Link to="/lists">LISTS</Link>
              </li>
              <li className="text-sm py-2">
                <Link to="/people">PEOPLE</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="hidden lg:block">
        <ul className="flex justify-between space-x-9 mx-4 px-20 text-gray-500 font-rob font-semibold cursor-pointer items-center">
          <li className="hover:text-white">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-white relative" onClick={handleMovieClick}>
            <span>MOVIES</span>
            {showMovieList && (
              <ul
                ref={movieDropdownRef}
                className="absolute bg-gray-500 text-black rounded-md z-50 w-32"
              >
                <li className="hover:bg-nav p-2 border-b hover:text-white rounded-t-md   border-gray-600">
                  <Link to="/movie/now-playing">Now Playing</Link>
                </li>
                <li className="hover:bg-nav p-2 border-b hover:text-white  border-gray-600">
                  <Link to="/movie/popular-movies">Popular</Link>
                </li>
                <li className="hover:bg-nav p-2 border-b hover:text-white  border-gray-600">
                  <Link to="/movie/top-rated">Top Rated</Link>
                </li>
                <li className="hover:bg-nav p-2 rounded-b-md hover:text-white  border-gray-600">
                  <Link to="/movie/upcoming-movies">Upcoming</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-white relative" onClick={handleTvClick}>
            <span>TV SHOWS</span>
            {showTvlist && (
              <ul
                ref={tvDropdownRef}
                className="absolute bg-gray-500 text-black rounded-md z-50 w-32"
              >
                <li className="hover:bg-nav p-2 border-b hover:text-white rounded-t-md border-gray-600">
                  <Link to="/tv/top-rated">Top Rated</Link>
                </li>
                <li className="hover:bg-nav p-2 border-b hover:text-white border-gray-600">
                  <Link to="/tv/popular">Popular</Link>
                </li>
                <li className="hover:bg-nav p-2 border-b hover:text-white border-gray-600">
                  <Link to="/tv/on-the-air">On the Air</Link>
                </li>
                <li className="hover:bg-nav p-2 border-b hover:text-white rounded-b-md border-gray-600">
                  <Link to="/tv/airing-today">Airing Today</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-white">
            <Link to="/people">PEOPLE</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/search">
              <SearchIcon style={{ verticalAlign: "middle" }} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
