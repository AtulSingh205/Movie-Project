import React, { useContext } from 'react'
import { Store } from '../../Context/Sbkamalikek'

const Upcoming = () => {
  const { Upcoming } = useContext(Store)

  return (
    <div className="px-6">
      <h1 className="font-bold text-2xl text-amber-100 ml-4 mb-4">Upcoming 🎬</h1>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {Upcoming.map((itm) => (
          <div
            key={itm.id}
            className="min-w-[180px] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 relative group"
          >
            {/* Poster image */}
            <img
              src={`https://image.tmdb.org/t/p/w500${itm.poster_path}`}
              alt={itm.title}
              className="w-full h-[250px] object-cover"
            />

            {/* Overlay details (hidden until hover) */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-semibold text-sm mb-2">{itm.title}</h1>
              <p className="text-gray-300 text-xs">Release: {itm.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Upcoming
