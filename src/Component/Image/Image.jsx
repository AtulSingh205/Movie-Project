import React, { useContext, useState, useEffect } from 'react'
import { Store } from '../../Context/Sbkamalikek'

const Image = () => {
  const { nowPlaying } = useContext(Store)
  const [index, setIndex] = useState(0) // starting index

  // Har 3 second me image index update hoga
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex + 1 < nowPlaying.length ? prevIndex + 1 : 0
      )
    }, 3000) // 3000ms = 3 sec

    return () => clearInterval(interval)
  }, [nowPlaying])

  // sirf ek hi image show karna hai
  const currentImg = nowPlaying[index]

  return (
    <div className="flex justify-center mt-10">
      {currentImg && (
        <div
          key={currentImg.id}
          className="w-[800px] h-[300px] bg-gray-900 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${currentImg.poster_path}`}
            alt={currentImg.title}
            className="w-full h-[300px] object-cover"
          />
        </div>
      )}
    </div>
  )
}

export default Image
