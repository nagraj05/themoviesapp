import SearchIcon from "@mui/icons-material/Search";

export default function Search({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className="flex justify-center align-middle pt-6 relative">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-2xl text-black px-4  font-ptsans text-lg w-72 h-8 pr-10"
        onChange={handleInputChange}
      />
      <div className="absolute" style={{ right: "540px", top: "27px" }}>
        <SearchIcon />
      </div>
    </div>
  );
}
