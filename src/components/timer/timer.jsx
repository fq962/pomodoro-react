import React, { useState, useEffect } from 'react'
import './timer.css'

const tipoBoton = {
  pomodoro: 'pomodoro',
  descanso: 'descanso',
  descansoLargo: 'descansoLargo'
}

function Timer() {
  const [time, setTime] = useState(20 * 60)
  const [running, setRunning] = useState(false)
  const [botonSeleccionado, setBotonSeleccionado] = useState(tipoBoton.pomodoro)

  useEffect(() => {
    if (botonSeleccionado === tipoBoton.pomodoro) {
      setTime(20 * 60)
      setRunning(false)
    }
    if (botonSeleccionado === tipoBoton.descanso) {
      setTime(5 * 60)
      setRunning(false)
    }
    if (botonSeleccionado === tipoBoton.descansoLargo) {
      setTime(10 * 60)
      setRunning(false)
    }
  }, [botonSeleccionado])
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
          <button
            className={
              botonSeleccionado === 'pomodoro'
                ? 'btn-opcion-selected'
                : 'btn-opciones'
            }
            onClick={() => {
              setBotonSeleccionado(tipoBoton.pomodoro)
            }}
          >
            Pomodoro
          </button>
          <button
            className={
              botonSeleccionado === 'descanso'
                ? 'btn-opcion-selected'
                : 'btn-opciones'
            }
            onClick={() => {
              setBotonSeleccionado(tipoBoton.descanso)
            }}
          >
            Descanso
          </button>
          <button
            className={
              botonSeleccionado === 'descansoLargo'
                ? 'btn-opcion-selected'
                : 'btn-opciones'
            }
            onClick={() => {
              setBotonSeleccionado(tipoBoton.descansoLargo)
            }}
          >
            Descanso Largo
          </button>
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
