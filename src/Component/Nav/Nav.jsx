import React from 'react'
import { Link } from 'react-router-dom' // <--- Link import
import Search from './Search'
import Slidebar from './Slidebar'
import Signup from './Signup'
import Languge from './Languge'

const Nav = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='ml-5'>
        <Slidebar />
      </div>

        <Search />
      
      <div className='mt-4  mr-10 flex gap-9 '>
        <Link to="/wishlist">
          <img className='h-12 w-12 cursor-pointer animate-bounce' src="https://cdn-icons-png.flaticon.com/128/10307/10307888.png" alt="Wishlist" />
        </Link>
        <div className='flex gap-2' >
          <Languge />
          <Signup />
        </div>
      </div>
    </div>
  )
}

export default Nav;
