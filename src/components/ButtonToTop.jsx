import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState, useEffect } from "react";

export default function ButtonToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = 500;

    setIsVisible(scrollTop > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: "9999",
      }}
    >
      {isVisible && (
        <KeyboardArrowUpIcon
          onClick={scrollToTop}
          className="text-white rounded-full cursor-pointer bg-nav hover:bg-white hover:text-nav"
          style={{ fontSize: "50px" }}
        />
      )}
    </div>
  );
}
