import React, { useContext } from 'react'
import '../styles/Stats.css'

function Stats() {
  const {gameData} = useContext(Context)
  return (
    <div className='stats-modal'>
    <div className='stats-card'>
      <div className='stats-body'>
        <ul>
          <li>
            On Turn: {gameData.turn}
          </li>
          <li>
            Player Ranking: {gameData.ranking}
          </li>
          <li>
            Progress: {gameData.progress}
          </li>
          <li>
            {/* add function that updates our time in real time, so like elapsed time + whatever we need */}
            Time Since Start: {gameData.elapTime}
          </li>
          <li>
            Time On Turn: {gameData.turnTime}
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Stats