// import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Timer from './components/timer/timer'

function App() {
  return (
    <main>
      <section className='navbar-section'>
        <Navbar />
      </section>
      <section className='timer'>
        <Timer />
      </section>
    </main>
  )
}

export default App
