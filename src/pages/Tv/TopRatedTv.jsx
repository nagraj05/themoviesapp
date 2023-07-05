import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import ButtonToTop from "../../components/ButtonToTop";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function TopRatedTv() {
  const [popularShows, setPopularShows] = useState([]);
  const [count, setCount] = useState(1);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;


  function subtract() {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
    }
  }
  function add() {
    setCount((prevState) => prevState + 1);
  }
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&page=${count}`)
      .then((response) => response.json())
      .then((data) => setPopularShows(data.results))
      .catch((error) => console.log(error));
  }, [count]);

  const baseUrl = "https://image.tmdb.org/t/p/w500";




  return (
    <div>
      <Navbar />
      <div className="flex m-5 justify-center">
        <ArrowBackIosIcon
          onClick={subtract}
          className="text-white cursor-pointer rounded-md bg-nav p-2"
          style={{ fontSize: "32px" }}
        />
        <h1 className="text-white">{count}</h1>
        <ArrowForwardIosIcon
          onClick={add}
          className="text-white cursor-pointer bg-nav p-2"
          style={{ fontSize: "32px" }}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {popularShows.map((show) => (
          <Link
            key={show.id}
            to={`/tv/${show.id}`}
           
          >
            <div className="w-60 border border-gray-500 mx-5 my-3 ">
              <img
                src={baseUrl + show.poster_path}
                alt=""
                className="h-64 w-60"
              />
              <div>
                <h4 className="text-white font-ptsans  m-2">{show.name}</h4>
                {/* <p className="text-white  m-2">IMDb: {show.vote_average}/10</p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ButtonToTop />
      <Footer />
    </div>
  );
}

export default TopRatedTv;
