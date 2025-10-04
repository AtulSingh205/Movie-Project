import React, { useContext } from 'react'
import { Store } from '../../Context/Sbkamalikek'

const Wishlist = () => {
  const { Wishlist } = useContext(Store)

  return (
    <div className="px-6 py-6">
      <h1 className="text-2xl font-bold text-amber-100 mb-6">
        My Wishlist ❤️
      </h1>

      {Wishlist.length === 0 ? (
        <p className="text-gray-400">No movies added yet...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Wishlist.map((itm) => (
            <div
              key={itm.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${itm.poster_path}`}
                alt={itm.title}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-2">
                <h1 className="text-sm font-semibold text-white truncate">
                  {itm.title}
                </h1>
                <p className="text-xs text-gray-400">{itm.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
