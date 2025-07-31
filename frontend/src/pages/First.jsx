import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'

function First() {
  return (
   <>
   <TopBar/>
   <Navbar/>
   <Outlet/>
   </>
  )
}

export default First