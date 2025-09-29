import React from 'react'
import Search from './Search'
import Wishlist from './Wishlist'

const Nav = () => {
  return (
    <div className='flex items-center justify-center gap-5  ' >
      <Search/>
      <div className='mt-4 animate-bounce'>
             <Wishlist/>
      </div>
   
      </div>
  )
}

export default Nav
