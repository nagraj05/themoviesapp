import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Moviedetails from "./components/Moviedetails";
import NowPlaying from "./pages/Movies/NowPlaying"
import PopularMovies from "./pages/Movies/PopularMovies"
import TopRatedMovies from "./pages/Movies/TopRatedMovies"
import UpcomingMovies from "./pages/Movies/UpcomingMovies"
import Tv from "./pages/Tv";
import TvDetails from "./components/TvDetails";
import TvTopRated from "./pages/Tv/TopRatedTv";
import TvPopular from "./pages/Tv/Popular";
import TvOnTheAir from "./pages/Tv/OnTheAir";
import TvAiringToday from "./pages/Tv/AiringToday";
import Lists from "./pages/Lists";
import People from "./pages/People";
import Peopledetails from "./components/Peopledetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Moviedetails />} />
        <Route path="/movie/top-rated" element={<TopRatedMovies />}/>
        <Route path="/movie/upcoming-movies" element={<UpcomingMovies />}/>
        <Route path="/movie/popular-movies" element={<PopularMovies />}/>
        <Route path="/movie/now-playing" element={<NowPlaying />}/>
        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/:id" element={<TvDetails />} />
        <Route path="/tv/top-rated" element={<TvTopRated />} />
        <Route path="/tv/airing-today" element={<TvAiringToday />} />
        <Route path="/tv/popular" element={<TvPopular />} />
        <Route path="/tv/on-the-air" element={<TvOnTheAir />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<Peopledetails />}/>
      </Routes>
    </Router>
  );
}

export default App;
