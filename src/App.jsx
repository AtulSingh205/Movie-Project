import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Component/Nav/Nav'
import Popurlar from './Component/Header/Popurlar'
import Hader from './Component/Header/Hader'
import Image from './Component/Image/Image'
import Wishlist from './Component/Nav/Wishlist'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage route */}
        <Route
          path="/"
          element={
            <div className='min-h-screen w-screen bg-blue-950 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900'>
              <Nav />
              <Image />
              <Hader />
              <Popurlar />
            </div>
          }
        />
        {/* Wishlist route */}
        <Route
          path="/wishlist"
          element={
            <div className='min-h-screen w-screen bg-blue-950'>
              <Nav />  {/* optional, agar chahte ho nav har page dikhe */}
              <Wishlist />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
