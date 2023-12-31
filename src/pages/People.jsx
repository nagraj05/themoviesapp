import Navbar from "../components/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ButtonToTop from "../components/ButtonToTop";

export default function People() {
  const [count, setCount] = useState(1);
  const [people, setPeople] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  const navigate = useNavigate();

  function subtract() {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
    }
  }

  function add() {
    setCount((prevState) => prevState + 1);
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${api_key}&page=${count}`
    )
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.log(error));
    navigate(`/people?page=${count}`, { replace: true });
  }, [api_key, count, navigate]);

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <Navbar />
      <div className="flex justify-end mr-16">
        <div className="flex m-5 justify-center items-center gap-3">
          <ArrowForwardIosIcon
            onClick={subtract}
            className="text-white cursor-pointer bg-nav  p-2"
            style={{ fontSize: "32px", transform: "rotate(180deg)" }}
          />
          <h1 className="text-white">{count}</h1>
          <ArrowForwardIosIcon
            onClick={add}
            className="text-white cursor-pointer bg-nav p-2"
            style={{ fontSize: "32px" }}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {people.map((person) => (
          <Link key={person.id} to={`/people/${person.id}`}>
            <div className="w-52 border rounded-md border-gray-500 mx-5 my-3 ">
              <img
                src={baseUrl + person.profile_path}
                alt=""
                className="h-64 w-52 rounded-t-md"
              />
              <div>
                <h4 className="text-white font-ptsans  m-2">{person.name}</h4>
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
