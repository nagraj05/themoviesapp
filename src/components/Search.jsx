export default function Search({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className="flex justify-center align-middle pt-6">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-2xl text-black px-2 w-52 h-8"
        onChange={handleInputChange}
      />
    </div>
  );
}
