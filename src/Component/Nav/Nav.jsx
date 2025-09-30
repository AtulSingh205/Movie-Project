import React from 'react'
import { Link } from 'react-router-dom' // <--- Link import
import Search from './Search'
import Slidebar from './Slidebar'

const Nav = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='ml-5'>
        <Slidebar />
      </div>

      <Search />

      {/* Heart icon navigates to /wishlist */}
      <div className='mt-4 animate-bounce mr-10'>
        <Link to="/wishlist">
          <img className='h-12 w-12 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/10307/10307888.png" alt="Wishlist" />
        </Link>
      </div>
    </div>
  )
}

export default Nav
