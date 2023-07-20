import React from "react";

const ScrollButton = ({ direction, targetId }) => {
  const scrollLeft = () => {
    const photoGrid = document.getElementById(targetId);
    if (photoGrid) {
      photoGrid.scrollBy({
        left: -200, // Adjust this value to control the scroll speed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const photoGrid = document.getElementById(targetId);
    if (photoGrid) {
      photoGrid.scrollBy({
        left: 200, // Adjust this value to control the scroll speed
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={direction === "left" ? scrollLeft : scrollRight}
      className="bg-gray-800 rounded-full h-10 w-10 absolute top-1/2 transform -translate-y-1/2 flex items-center justify-center text-white cursor-pointer"
      style={{
        left: direction === "left" ? "20px" : "auto",
        right: direction === "right" ? "20px" : "auto",
      }}
    >
      {direction === "left" ? "<" : ">"}
    </button>
  );
};

export default ScrollButton;
