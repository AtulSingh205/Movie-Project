import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StoreProvider } from './Context/Sbkamalikek'
import Nav from './Component/Nav/Nav'
import Popurlar from './Component/Header/Popurlar'
import Hader from './Component/Header/Hader'
import Image from './Component/Image/Image'
import Wishlist from './Component/Nav/Wishlist'
import SearchResult from './Component/SearchResult'

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <div className="min-h-screen w-screen bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900">
                <div className="fixed top-0 left-0 h-[95px] w-full z-50 bg-blue-800">
                  <Nav />
                </div>
                <div className="relative pt-20">
                  <Image />
                </div>
                <Hader />
                <Popurlar />
              </div>
            }
          />

          {/* Wishlist */}
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

          {/* Search Results */}
          <Route path="/search" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
