import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";

export default function Home() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedMoviesPages, setTopRatedMoviesPages] = useState(1);
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
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [scifiMovies, setScifiMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [warMovies, setWarMovies] = useState([]);
  const [westernMovies, setWesternMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setTrendingMovies(data.results))
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setTrendingTv(data.results))
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setTrendingPeople(data.results))
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
        const familyGenre = data.genres.find(
          (genre) => genre.name === "Family"
        );
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
        const fantasyGenre = data.genres.find(
          (genre) => genre.name === "Fantasy"
        );
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
        const historyGenre = data.genres.find(
          (genre) => genre.name === "History"
        );
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
        const horrorGenre = data.genres.find(
          (genre) => genre.name === "Horror"
        );
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
        const mysteryGenre = data.genres.find(
          (genre) => genre.name === "Mystery"
        );
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

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const romanceGenre = data.genres.find(
          (genre) => genre.name === "Romance"
        );
        if (romanceGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${romanceGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setRomanceMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const scifiGenre = data.genres.find(
          (genre) => genre.name === "Science Fiction"
        );
        if (scifiGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${scifiGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setScifiMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const thrillerGenre = data.genres.find(
          (genre) => genre.name === "Thriller"
        );
        if (thrillerGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${thrillerGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setThrillerMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const warGenre = data.genres.find((genre) => genre.name === "War");
        if (warGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${warGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setWarMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        const westernGenre = data.genres.find(
          (genre) => genre.name === "Western"
        );
        if (westernGenre) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${westernGenre.id}`
          )
            .then((response) => response.json())
            .then((data) => setWesternMovies(data.results))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [api_key]);

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const peopleContainerRef = useRef(null);
  const trendingMoviesContainerRef = useRef(null);
  const trendingTvContainerRef = useRef(null);
  const topRatedMoviesContainerRef = useRef(null);
  const topRatedTvShowsContainerRef = useRef(null);
  const actionMoviesContainerRef = useRef(null);
  const adventureMoviesContainerRef = useRef(null);
  const animatedMoviesContainerRef = useRef(null);
  const comedyMoviesContainerRef = useRef(null);
  const crimeMoviesContainerRef = useRef(null);
  const documentaryMoviesContainerRef = useRef(null);
  const dramaMoviesContainerRef = useRef(null);
  const familyMoviesContainerRef = useRef(null);
  const fantasyMoviesContainerRef = useRef(null);
  const historyMoviesContainerRef = useRef(null);
  const horrorMoviesContainerRef = useRef(null);
  const musicalMoviesContainerRef = useRef(null);
  const mysteryMoviesContainerRef = useRef(null);
  const romanceMoviesContainerRef = useRef(null);
  const scifiMoviesContainerRef = useRef(null);
  const thrillerMoviesContainerRef = useRef(null);
  const warMoviesContainerRef = useRef(null);
  const westernMoviesContainerRef = useRef(null);
  const popularTvShowsContainerRef = useRef(null);

  const handleArrowClick = (containerRef, direction) => {
    const container = containerRef.current;
    const scrollDistance = 700;
    const scrollDirection = direction === "left" ? -1 : 1;

    container.scrollBy({
      left: scrollDirection * scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="flex flex-col overflow-hidden">
          {/*Trending Movies*/}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Trending Movies
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(trendingMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(trendingMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll  scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={trendingMoviesContainerRef}
            >
              {trendingMovies.map((movie) => (
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
          {/*Trending Tv*/}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Trending Shows
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(trendingTvContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(trendingTvContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll  scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={trendingTvContainerRef}
            >
              {trendingTv.map((movie) => (
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
          {/*Trending People*/}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Trending on Google
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() => handleArrowClick(peopleContainerRef, "left")}
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() => handleArrowClick(peopleContainerRef, "right")}
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll  scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={peopleContainerRef}
            >
              {trendingPeople.map((movie) => (
                <Link key={movie.id} to={`/people/${movie.id}`}>
                  <div className="w-40 border border-gray-500 rounded-lg mx-2 my-3">
                    <img
                      src={baseUrl + movie.profile_path}
                      alt=""
                      className="h-54 w-40 rounded-t-lg"
                    />
                    <h4 className="text-white font-ptsans  m-2">
                      {movie.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Top Rated Movies */}
          <div className="flex flex-col p-4 ">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Top Rated Movies
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(topRatedMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(topRatedMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={topRatedMoviesContainerRef}
            >
              {topRatedMovies &&
                topRatedMovies.map((movie) => (
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
          {/*Top Rated Tv Shows*/}
          <div className="flex flex-col p-4 ">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Top Rated Tv Shows
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(topRatedTvShowsContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(topRatedTvShowsContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={topRatedTvShowsContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Full on Action Movies
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(actionMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(actionMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={actionMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Adventure Movies
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(adventureMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(adventureMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={adventureMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Animated Movies
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(animatedMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(animatedMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={animatedMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Only Laughs
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(comedyMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(comedyMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={comedyMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Criminal with style
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(crimeMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(crimeMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={crimeMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Documentaries
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(documentaryMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(documentaryMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={documentaryMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Drama Movies
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(dramaMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(dramaMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={dramaMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                You Can Watch With Your Family
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(familyMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(familyMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={familyMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Yo! Fantasies Here
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(fantasyMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(fantasyMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={fantasyMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Watch Little History Here
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(historyMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(historyMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={historyMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Are you scared?
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(horrorMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(horrorMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={horrorMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Musicals for Life
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(musicalMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(musicalMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={musicalMoviesContainerRef}
            >
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Ooh What A Mystery!
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(mysteryMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(mysteryMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={mysteryMoviesContainerRef}
            >
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
          {/* Romance Movies */}
          <div className="flex flex-col p-4 ">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Aww Love these Romance Movies
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(romanceMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(romanceMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={romanceMoviesContainerRef}
            >
              {romanceMovies.map((movie) => (
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
          {/* Scifi Movies */}
          <div className="flex flex-col p-4 ">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Binge Worthy SciFi Movies
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(scifiMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(scifiMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={scifiMoviesContainerRef}
            >
              {scifiMovies.map((movie) => (
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
          {/* Thriller Movies */}
          <div className="flex flex-col p-4 ">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Yay Thrillers!
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(thrillerMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(thrillerMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={thrillerMoviesContainerRef}
            >
              {thrillerMovies.map((movie) => (
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
          {/* War Movies */}
          <div className="flex flex-col p-4 ">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                War Movies
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(warMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(warMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={warMoviesContainerRef}
            >
              {warMovies.map((movie) => (
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
          {/* Western Movies */}
          <div className="flex flex-col p-4 ">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Western Movies
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(westernMoviesContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(westernMoviesContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={westernMoviesContainerRef}
            >
              {westernMovies.map((movie) => (
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl font-nunito mx-2">
                Popular Tv Shows
              </h3>
              <div className="hidden sm:flex  justify-end gap-1 items-center">
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer  bg-nav p-2"
                  style={{ fontSize: "32px", transform: "rotate(180deg)" }}
                  onClick={() =>
                    handleArrowClick(popularTvShowsContainerRef, "left")
                  }
                />
                <ArrowForwardIosIcon
                  className="text-white cursor-pointer bg-nav p-2"
                  style={{ fontSize: "32px" }}
                  onClick={() =>
                    handleArrowClick(popularTvShowsContainerRef, "right")
                  }
                />
              </div>
            </div>
            <div
              className="flex overflow-x-scroll scrollbar scrollbar-track-slate-800 scrollbar-track-rounded-2xl scrollbar-thumb-slate-700 scrollbar-thumb-rounded-2xl"
              ref={popularTvShowsContainerRef}
            >
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
