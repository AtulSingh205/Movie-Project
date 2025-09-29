import React from 'react'
import Popular from './Popurlar'
import Toprated from './Toprated'
import Upcoming from './Upcoming'

const Hader = () => {
  return (
    <div>
      <Upcoming/>
      <Popular/>
      <Toprated/>
    </div>
  )
}

export default Hader
