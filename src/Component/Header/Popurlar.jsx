import React, { useContext } from 'react'
import { Store } from '../../Context/Sbkamalikek'

const Popular = () => {
  const { popular } = useContext(Store)

  return (
    <div className="px-6">
      <h1 className="font-bold ml-4 text-2xl mb-4 text-amber-100">Popular 🔥</h1>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {popular.map((itm) => (
          <div
            key={itm.id}
            className="min-w-[160px] bg-gray-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 relative"
          >
            <div className="absolute top-2 right-2 z-20">
              <img
                className="w-6 h-6"
                src="https://cdn-icons-png.flaticon.com/128/10307/10307888.png"
                alt="heart"
              />
            </div>

            <img
              src={`https://image.tmdb.org/t/p/w500${itm.poster_path}`}
              alt={itm.title}
              className="w-full h-[220px] object-cover"
            />

            <div className="p-2 relative z-10">
              <h1 className="text-sm font-semibold text-white truncate">{itm.title}</h1>
              <p className="text-xs text-gray-400">{itm.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Popular
