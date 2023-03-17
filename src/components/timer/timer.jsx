import React, { useState, useEffect } from 'react'
import './timer.css'

function Timer() {
  const [time, setTime] = useState(1 * 60) // Tiempo inicial en segundos
  const [running, setRunning] = useState(false) // Estado de ejecución del temporizador

  useEffect(() => {
    let intervalId

    if (running && time > 0) {
      intervalId = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else {
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [running, time])

  const handleStart = () => {
    setRunning(true)
  }

  const handleStop = () => {
    setRunning(false)
    setTime(20 * 60) // Reinicia el tiempo al valor inicial
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }
  return (
    <div className='container'>
      <div className='timer-container'>
        <div className='timer-opciones'>
          <button className='btn-opciones'>Pomodoro</button>
          <button className='btn-opciones'>Descanso</button>
          <button className='btn-opciones'>Descanso Largo</button>
        </div>
        <h1 className='minutes'>{formatTime(time)}</h1>
        {!running && (
          <button className='btn-start' onClick={handleStart}>
            Comenzar
          </button>
        )}
        {running && (
          <button className='btn-stop' onClick={handleStop}>
            Reiniciar
          </button>
        )}
      </div>
    </div>
  )
}

export default Timer
