import { useState, useEffect } from 'react'
import { useContador } from './useContador'

const tipoBoton = {
  pomodoro: 'pomodoro',
  descanso: 'descanso',
  descansoLargo: 'descansoLargo'
}
export const useBotonSeleccionado = () => {
  const [botonSeleccionado, setBotonSeleccionado] = useState(tipoBoton.pomodoro)
  const { setTime, setRunning } = useContador()

  useEffect(() => {
    console.log('useBotonSeleccionado')
    console.log(botonSeleccionado)
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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }

  return {
    botonSeleccionado,
    setBotonSeleccionado,
    formatTime
  }
}
