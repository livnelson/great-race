import React from 'react'
import '../styles/Logout.css'

function Logout() {
  return (
    <div className='logout-modal'>
      <div className='logout-card'>
        <div className='logout-body'>
          <h2>Do you want to log out?</h2>
          <p>Your progress will be saved</p>
        </div>
      </div>
    </div>
  )
}

export default Logout