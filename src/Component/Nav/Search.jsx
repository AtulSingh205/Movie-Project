import React, { useContext } from "react";
import { Store } from "../../Context/Sbkamalikek";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { search, setSearch } = useContext(Store);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if ((e.key === "Enter" || e.type === "click") && search.trim()) {
      navigate(`/search?q=${search}`);
    }
  };

  return (
    <div className="flex items-center gap-2 mt-5">
      <input
        value={search}
        type="text"
        placeholder="Search movies..."
        className="w-72 px-4 py-2 rounded-lg border-2 border-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
