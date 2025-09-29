import React from 'react'
import Nav from './Component/Nav/Nav'
import Popurlar from './Component/Header/Popurlar'
import Hader from './Component/Header/Hader'
import Image from './Component/Image/Image'

const App = () => {
  return (
      <div className='min-h-screen w-screen bg-blue-950 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 '>
      <Nav/>
      <Image/>
      <Hader/>
      </div> 
  )
}

export default App
