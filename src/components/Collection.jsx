import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Collection() {
  const [collection, setCollection] = useState(null);
  const [numberOfMovies, setNumberOfMovies] = useState(0);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/collection/${id}?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        setCollection(data);
        setNumberOfMovies(data.parts.length);
      })
      .catch((error) => console.log(error));
  }, [id, api_key]);

  if (!collection) {
    return <div className="text-white text-2xl">Loading...</div>;
  }

  const sortedParts = collection.parts.sort(
    (a, b) => new Date(a.release_date) - new Date(b.release_date)
  );

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="rounded-lg shadow-md bg-white p-4">
        <div className="flex">
          <img
            src={`${baseUrl}${collection.poster_path}`}
            alt={collection.name}
            className="w-36 h-52 rounded-lg object-cover mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">{collection.name}</h2>
            <p className="text-gray-500 text-lg mt-5">{collection.overview}</p>
            <p className="text-gray-500 text-lg mt-5 ">
              Number of Movies : {numberOfMovies}
            </p>
          </div>
        </div>
      </div>
      {/*Parts*/}
      <div className="mt-4 mx-10">
        {sortedParts.map((part) => (
          <Link
            key={part.id}
            to={`/movie/${part.id}`}
            className="border flex bg-white rounded-lg p-2 my-2"
          >
            <img
              src={`${baseUrl}${part.poster_path}`}
              alt={collection.name}
              className="w-36 h-52 rounded-lg object-cover mr-4"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold">
                {part.title}{" "}
                <span className="font-mono">
                  ({new Date(part.release_date).getFullYear()})
                </span>
              </h3>
              <p className="text-gray-500 mt-2">{part.overview}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
