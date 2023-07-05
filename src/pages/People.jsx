import Navbar from "../components/Navbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

export default function People() {
  const [count, setCount] = useState(1);

  function subtract() {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
    }
  }
  function add() {
    setCount((prevState) => prevState + 1);
  }
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
    </div>
  );
}
