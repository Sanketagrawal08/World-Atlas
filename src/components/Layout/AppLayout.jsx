import React from 'react'
import Headers from '../UI/Headers'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
     <>
       <Headers/>
       <Outlet/>
     </>
  )
}

export default AppLayout