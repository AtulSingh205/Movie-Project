import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (query) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`)
        .then((res) => res.json())
        .then((data) => setMovies(data.results || []));
    }
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Results for: {query}</h2>
      <div className="grid grid-cols-4 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="bg-gray-200 p-2 rounded">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <p className="mt-2 font-semibold">{movie.title}</p>
            </div>
          ))
        ) : (
          <p>No results found...</p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
