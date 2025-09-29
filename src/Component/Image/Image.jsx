import React, { useContext } from 'react'
import { Store } from '../../Context/Sbkamalikek'

const Image = () => {
    const {nowPlaying}=useContext(Store)
  return (
    <div>
      <div className='flex gap-4  overflow-x-auto hide-scrollbar mt-10'>
        {nowPlaying.map((itm)=>(
            <div    key={itm.id}
            className="min-w-[250px] h-[150px] bg-gray-900 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
              src={`https://image.tmdb.org/t/p/w500${itm.poster_path}`}
              alt={itm.title}
              className="w-full h-[250px] object-cover"
            />
            </div>   
        ))}
      </div>
    </div>
  )
}

export default Image
