import { useEffect, useState } from "react";
import Slider from "react-slick";

const TrendingMoviesCarousel = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setTrendingMovies(data.results))
      .catch((error) => console.log(error));
  }, [api_key]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {trendingMovies.map((movie) => (
          <div key={movie.id} className="relative">
            <img
              src={baseUrl + movie.poster_path}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded">
              {movie.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingMoviesCarousel;
