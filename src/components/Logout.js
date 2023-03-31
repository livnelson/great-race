import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Logout.css'

function Logout() {
  const navigate = useNavigate()

  function handleUserLogout() {
    navigate('/login')
  }
  return (
    <div className='logout-modal'>
      <div className='logout-card'>
        <div className='logout-body'>
          <h2>Do you want to log out?</h2>
          <p>Your progress will be saved</p>
          <button onClick={handleUserLogout}>Log out</button>
        </div>
      </div>
    </div>
  )
}

export default Logout