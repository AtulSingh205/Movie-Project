import React, { useContext } from 'react'
import { Store } from '../../Context/Sbkamalikek'

const Toprated = () => {
  const { toprated } = useContext(Store)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Top Rated 🔥</h1>

      <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
        {toprated.map((movie) => (
          <div
            key={movie.id}
            className="relative  min-w-[160px] bg-gray-900 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute top-2 right-2 z-20">
              <img
                className="w-6 h-6"
                src="https://cdn-icons-png.flaticon.com/128/10307/10307888.png"
                alt="heart"
              />
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-2">
              <h1 className="text-sm font-semibold text-white truncate">{movie.title}</h1>
              <p className="text-xs text-gray-400">{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Toprated
