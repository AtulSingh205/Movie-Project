import React from 'react'
import Search from './Search'
import Wishlist from './Wishlist'
import Slidebar from './Slidebar'

const Nav = () => {
  return (
    <div className='flex items-center  justify-items-end gap-10  ' >
      <div className=''>
         <Slidebar/>
      </div>
      <Search />
      <div className='mt-4 animate-bounce'>
      <Wishlist />
      </div>

    </div>
  )
}

export default Nav
