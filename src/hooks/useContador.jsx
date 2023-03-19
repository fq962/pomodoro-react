import { useEffect, useState } from 'react'

export const useContador = () => {
  const [time, setTime] = useState(20 * 60)
  const [running, setRunning] = useState(false)
  useEffect(() => {
    let intervalId
    console.log('useContador', time)
    // console.log('useEffect')
    if (running && time > 0) {
      intervalId = setInterval(() => {
        setTime((time) => time - 1)
        // if (time === 1) {
        //   audioRef.current.play()
        // }
      }, 1000)
    } else {
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [running, time])

  const handleStart = () => {
    // console.log('handleStart')
    setRunning(true)
  }

  const handleStop = () => {
    setRunning(false)
    setTime(20 * 60) // Reinicia el tiempo al valor inicial
  }

  return {
    time,
    setTime,
    running,
    setRunning,
    handleStart,
    handleStop
  }
}
