import { useState } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <DaisyNav></DaisyNav>
      <h1 className='text-6xl bg-sky-600 mt-4 p-8'>price-options</h1>
    </>
  )
}

export default App
