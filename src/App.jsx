import { useState } from 'react'
import './App.css'
import Timer from './components/timer/timer'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('var(--first-color)')

  return (
    <div>
      <Timer />
    </div>
  )
}

export default App
