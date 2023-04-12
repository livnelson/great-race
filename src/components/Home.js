import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import Rules from "./Rules"
import Stats from "./Stats"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../contexts/Context'
import '../styles/Home.css'

function Home({ nickname }) {
  const {gameData, answer, setAnswer, submitAnswer} = useContext(Context)
  const [viewRules, setViewRules] = useState(false)
  const [viewStats, setViewStats] = useState(false)
  const navigate = useNavigate()

  const stats = <FontAwesomeIcon icon={faRankingStar} />
  const rules = <FontAwesomeIcon icon={faScaleBalanced} />
  const home = <FontAwesomeIcon icon={faHouse} />

  function handleRules() {
    if (viewStats === true) setViewStats(!viewStats)
    setViewRules(!viewRules)
    console.log('rules clicked')
  }

  function handleStats() {
    if (viewRules === true) setViewRules(!viewRules)
    setViewStats(!viewStats)
    console.log('stats clicked')
  }

  function handleHome() {
    if (viewRules === true) setViewRules(!viewRules)
    if (viewStats === true) setViewStats(!viewStats)
    console.log('home clicked')
  }

  return (
    <div className='home-page'>
      <div className='home-body'>
        <div className='home-card'>
          <div className="game-stuff">
            {nickname?  <h2 className='greeting'>Your game code: <br/>{gameData.nickname}</h2> : navigate('/login')}
            <p>{gameData.body}</p>
            <form onSubmit={(e) => submitAnswer(e)}>
              <div>
                <label htmlFor="name">Answer:</label>
                <input type="text" name="name" value={answer} onChange={(e)=> setAnswer(e.target.value)} />
              </div>
              <div className="submitButton">
                <input type="submit" value="Submit" className="button" />
              </div>
            </form>
          </div>
          {viewStats ? <Stats /> : null}
          {viewRules ? <Rules /> : null}
        </div>
      </div>

      <div className='footer'>
        <div className='footer-buttons'>
          <button className='footer-button' onClick={handleHome}>{home}</button>
          <button className='footer-button' onClick={handleStats}>{stats}</button>
          <button className='footer-button' onClick={handleRules}>{rules}</button>
        </div>
      </div>
    </div>
  )
}

export default Home