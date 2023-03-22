// import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Timer from './components/timer/timer'

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Timer />
    </div>
  )
}

export default App
