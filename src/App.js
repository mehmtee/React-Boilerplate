import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from './views/Login'

import Dashboard from './layouts/Dashboard'

const app =  () => {

  return (
    <>
    
     <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Dashboard element={<>Home</>} />}/>
      <Route path="/users" element={<Dashboard element={<>Users</>} />}/>

    </Routes>
  </BrowserRouter>
    </>
  )
}

export default app
