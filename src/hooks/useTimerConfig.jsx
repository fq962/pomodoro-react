import { useState, useEffect } from 'react'
import { tipoBoton } from '../components/models/tipoBotonModel'

export const useTimerConfig = (audioRef) => {
  const [time, setTime] = useState(20 * 60)
  const [running, setRunning] = useState(false)
  const [botonSeleccionado, setBotonSeleccionado] = useState(tipoBoton.pomodoro)

  //* Efecto que controla los estados del boton
  useEffect(() => {
    if (botonSeleccionado === tipoBoton.pomodoro) {
      setTime(20 * 60)
      setRunning(false)
      const body = document.querySelector('body')
      body.classList.remove('descanso')
      body.classList.remove('descanso-largo')
      body.classList.remove('pomodoro')
      body.classList.add('pomodoro')
    }
    if (botonSeleccionado === tipoBoton.descanso) {
      setTime(5 * 60)
      setRunning(false)
      const body = document.querySelector('body')
      body.classList.remove('descanso')
      body.classList.remove('descanso-largo')
      body.classList.remove('pomodoro')
      body.classList.add('descanso')
    }
    if (botonSeleccionado === tipoBoton.descansoLargo) {
      setTime(10 * 60)
      setRunning(false)
      const body = document.querySelector('body')
      body.classList.remove('descanso')
      body.classList.remove('descanso-largo')
      body.classList.remove('pomodoro')
      body.classList.add('descanso-largo')
    }
  }, [botonSeleccionado])

  //* Efecto que controla el tick del timer
  useEffect(() => {
    let intervalId
    if (running && time > 0) {
      intervalId = setInterval(() => {
        setTime((time) => time - 1)
        if (time === 1) {
          audioRef.current.play()
        }
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
    if (botonSeleccionado === tipoBoton.pomodoro) {
      setTime(20 * 60)
    }
    if (botonSeleccionado === tipoBoton.descanso) {
      setTime(5 * 60)
    }
    if (botonSeleccionado === tipoBoton.descansoLargo) {
      setTime(10 * 60)
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }

  return {
    time,
    setTime,
    running,
    setRunning,
    handleStart,
    handleStop,
    formatTime,
    botonSeleccionado,
    setBotonSeleccionado
  }
}
