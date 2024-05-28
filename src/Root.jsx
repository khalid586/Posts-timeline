import React from 'react'
import { Outlet } from 'react-router-dom'


function Root() {
  return (
    <div className='font-custom'>
      <Outlet></Outlet>
    </div>
  )
  
}

export default Root