import React, { useState } from "react"
import { Link } from "react-router-dom";

export default function Slidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex gap-3">
 <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-blue-600 border-r shadow-lg 
        transform ${open ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out z-50`}
      >
        <nav className="h-full flex flex-col">
          <div className="p-4 pb-2 flex justify-between items-center border-b">
            <img
              className="h-16 w-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4_5leS4NZDQ8el6sbnJ1FygD0d6HPGpD6g&s"
              alt="logo"
            />
            <button onClick={() => setOpen(false)}>
              <img
                className="h-6 w-6"
                src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png"
                alt="close"
              />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex-1 px-4 py-6 space-y-4 text-amber-950 font-medium">
            <li>
              <Link to="/" className="flex items-center gap-3 hover:text-blue-600">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"
                  className="h-6 w-6 "
                  alt="home"
                />
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className="flex items-center gap-3 hover:text-blue-600">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1179/1179120.png"
                  className="h-6 w-6"
                  alt="movies"
                />
                Movies
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="flex items-center gap-3 hover:text-blue-600">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                  className="h-6 w-6"
                  alt="wishlist"
                />
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center gap-3 hover:text-blue-600">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png"
                  className="h-6 w-6"
                  alt="about"
                />
                About
              </Link>
            </li>
          </ul>

        
          <div className="border-t p-4 flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
              className="w-10 h-10 rounded-md"
              alt="user"
            />
            <div className="leading-4">
              <h1 className="font-semibold">User</h1>
              <span className="text-xs text-gray-950">
                atulsingh07062005@gmail.com
              </span>
            </div>
          </div>
        </nav>
      </aside>

      {/* Open Sidebar Button */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-md hover:bg-blue-900 text-white z-40 relative"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png"
          className="h-6 w-6"
          alt="menu"
        />
      </button>
      <div className="p-4 flex items-center gap-3 border-b">
  <h1 className="text-white text-xl font-bold">Prime Movies</h1>
</div>

      </div>
     
    </>
  );
}
