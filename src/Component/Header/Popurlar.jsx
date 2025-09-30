import React, { useContext } from 'react';
import { Store } from '../../Context/Sbkamalikek';

const Popular = () => {
  const { popular, setPopular, Wishlist, setWishlist } = useContext(Store);
  function toggleFav(Id) {

    let updated = popular.map((itm) =>
      itm.id === Id ? { ...itm, isFav: !itm.isFav } : itm
    );
    setPopular(updated);

    let clickitm = updated.find((itm) => itm.id === Id);

    if (clickitm) {
      if (clickitm.isFav) {
        setWishlist([...Wishlist, clickitm]);
      } else {
        setWishlist(Wishlist.filter((itm) => itm.id !== Id));
      }
    }
    console.log(Wishlist)
  }

  return (
    <div className="px-6">
      <h1 className="font-bold ml-4 text-2xl mb-4 text-amber-100">Popular 🔥</h1>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {popular.map((itm) => (
          <div
            key={itm.id}
            className="min-w-[160px] bg-gray-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 relative"
          >
            {/* Heart Button */}
            <div
              className="absolute top-2 right-2 z-20 cursor-pointer"
              onClick={() => toggleFav(itm.id)}
            >
              <img
                className="w-6 h-6"
                src={
                  itm.isFav
                    ? "https://cdn-icons-png.flaticon.com/128/833/833472.png" // filled heart
                    : "https://cdn-icons-png.flaticon.com/128/1077/1077035.png" // empty heart
                }
                alt="heart"
              />
            </div>

            {/* Poster */}
            <img
              src={`https://image.tmdb.org/t/p/w500${itm.poster_path}`}
              alt={itm.title}
              className="w-full h-[220px] object-cover"
            />

            {/* Title + Release Date */}
            <div className="p-2 relative z-10">
              <h1 className="text-sm font-semibold text-white truncate">
                {itm.title}
              </h1>
              <p className="text-xs text-gray-400">{itm.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
