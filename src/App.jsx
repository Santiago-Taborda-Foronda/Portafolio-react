import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Componets/Pages/Home/Home'
import { About } from './Componets/Pages/AboutUs/About'
import { Experience } from './Componets/Pages/Experience/Experience'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Experience' element={<Experience />} />
    </Routes>   
    </>
  )
}

