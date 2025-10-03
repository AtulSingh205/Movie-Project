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
            <div className="min-h-screen w-screen bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900">
              {/* Navbar fixed top */}
              <div className="fixed top-0 left-0 h-[95px] w-full z-50 bg-blue-800  ">
                <Nav />
              </div>

              {/* Hero section with Image */}
              <div className="relative pt-20"> 
                {/* pt-20 = navbar ki height jitna gap niche banane ke liye */}
                <Image />
              </div>

              {/* Rest content */}
              <Hader />
              <Popurlar />
            </div>
          }
        />

        {/* Wishlist route */}
        <Route
          path="/wishlist"
          element={
            <div className="min-h-screen w-screen bg-blue-950">
              <div className="fixed top-0 left-0 w-full z-50">
                <Nav />
              </div>
              <div className="pt-20">
                <Wishlist />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
