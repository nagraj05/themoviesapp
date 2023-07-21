import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

export default function Home() {
  const [upcoming, setUpcoming] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedMoviesPages, setTopRatedMoviesPages] = useState([]);
  const [popularShows, setPopularShows] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [topRatedTvPages, setTopRatedTvPages] = useState(1);
  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [animatedMovies, setAnimatedMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [fantasyMovies, setFantasyMovies] = useState([]);
  const [historyMovies, setHistoryMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [musicMovies, setMusicMovies] = useState([]);
  const [mysteryMovies, setMysteryMovies] = useState([]);

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
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setUpcoming(data.results))
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setTopRatedMoviesPages(data.total_pages))
      .catch((error) => console.log(error));
  }, [api_key]);

  const getRandomMoviePage = () => {
    return Math.floor(Math.random() * topRatedMoviesPages) + 1;
  };

  useEffect(() => {
    const randomMoviePageNumber = getRandomMoviePage();
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${randomMoviePageNumber}`
    )
      .then((response) => response.json())
      .then((data) => setTopRatedMovies(data.results))
      .catch((error) => console.log(error));
  }, [api_key, topRatedMoviesPages]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setPopularShows(data.results))
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setTopRatedTvPages(data.total_pages))
      .catch((error) => console.log(error));
  }, [api_key]);

  const getRandomPage = () => {
    return Math.floor(Math.random() * topRatedTvPages) + 1;
  };

  useEffect(() => {
    const randomPageNumber = getRandomPage();
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&page=${randomPageNumber}`
    )
      .then((response) => response.json())
      .then((data) => setTopRatedTv(data.results))
      .catch((error) => console.log(error));
  }, [api_key, topRatedTvPages]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const actionGenre = data.genres.find(
          (genre) => genre.name === "Action"
        );
        if (actionGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${actionGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setActionMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const adventureGenre = data.genres.find(
          (genre) => genre.name === "Adventure"
        );
        if (adventureGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${adventureGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setAdventureMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const animatedGenre = data.genres.find(
          (genre) => genre.name === "Animation"
        );
        if (animatedGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${animatedGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setAnimatedMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const comedyGenre = data.genres.find(
          (genre) => genre.name === "Comedy"
        );
        if (comedyGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${comedyGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setComedyMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const crimeGenre = data.genres.find((genre) => genre.name === "Crime");
        if (crimeGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${crimeGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setCrimeMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const documentaryGenre = data.genres.find(
          (genre) => genre.name === "Documentary"
        );
        if (documentaryGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${documentaryGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setDocumentaryMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const dramaGenre = data.genres.find((genre) => genre.name === "Drama");
        if (dramaGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${dramaGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setDramaMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const familyGenre = data.genres.find((genre) => genre.name === "Family");
        if (familyGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${familyGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setFamilyMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const fantasyGenre = data.genres.find((genre) => genre.name === "Fantasy");
        if (fantasyGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${fantasyGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setFantasyMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const historyGenre = data.genres.find((genre) => genre.name === "History");
        if (historyGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${historyGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setHistoryMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const horrorGenre = data.genres.find((genre) => genre.name === "Horror");
        if (horrorGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${horrorGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setHorrorMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const musicGenre = data.genres.find((genre) => genre.name === "Music");
        if (musicGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${musicGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setMusicMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const mysteryGenre = data.genres.find((genre) => genre.name === "Mystery");
        if (mysteryGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${mysteryGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setMysteryMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <Navbar />
      <Search onSearch={setSearchQuery} />
      <div className="flex">
        {searchQuery && (
          <div className="flex flex-col p-4">
            <h3 className="text-white text-2xl font-nunito mx-7 my-5">
              Search Results
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
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
        )}
        <div className="flex flex-col overflow-hidden">
          {/*Upcoming Movies*/}
          <div className="p-6">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Upcoming Movies
            </h3>
            <div className="flex overflow-x-scroll  scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {upcoming.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Top Rated Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Top Rated Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {topRatedMovies && (topRatedMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
                    <img
                      src={baseUrl + movie.poster_path}
                      alt=""
                      className="h-54 w-40 rounded-lg"
                    />
                  </div>
                </Link>
              )))}
            </div>
          </div>
          {/*Top Rated Tv Shows*/}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Top Rated Tv Shows
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {topRatedTv.map((movie) => (
                <Link key={movie.id} to={`/tv/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Action Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Action Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {actionMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Adventure Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Adventure Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {adventureMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Animated Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Animated Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {animatedMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Comedy Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Comedy Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {comedyMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Crime Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Crime Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {crimeMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Documentary Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Documentary Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {documentaryMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Drama Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Drama Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {dramaMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Family Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Family Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {familyMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Fantasy Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Fantasy Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {fantasyMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* History Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              History Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {historyMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Horror Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Horror Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {horrorMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Music Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Music Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {musicMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/* Mystery Movies */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Mystery Movies
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {mysteryMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
          {/*Popular Tv Shows */}
          <div className="flex flex-col p-4 ">
            <h3 className="text-white text-2xl font-nunito mx-2 mt-5">
              Popular Tv Shows
            </h3>
            <div className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl">
              {popularShows.map((movie) => (
                <Link key={movie.id} to={`/tv/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
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
