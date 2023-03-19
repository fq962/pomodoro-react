import React from 'react'
import { useTimerConfig } from '../../hooks/useTimerConfig'
import { tipoBoton } from '../models/tipoBotonModel'
import './timer.css'

function Timer() {
  const {
    time,
    botonSeleccionado,
    setBotonSeleccionado,
    formatTime,
    handleStart,
    handleStop,
    running,
    audioRef
  } = useTimerConfig()

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
        <audio ref={audioRef} src='src/assets/finish_alert.wav' />
      </div>
    </div>
  )
}

export default Timer
