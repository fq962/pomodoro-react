import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const repoURL = 'https://github.com/fq962/pomodoro-react'
  const handleRepoClick = () => {
    window.open(repoURL, '_blank')
  }
  return (
    <div className='navbar'>
      <span className='logo'>FERMODORO</span>
      <button className='repo' onClick={handleRepoClick}>
        <FontAwesomeIcon icon={faCodeBranch} /> repositorio
      </button>
    </div>
  )
}

export default Navbar
