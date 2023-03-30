import { useState, useEffect } from "react"
import Rules from "./Rules"
import Stats from "./Stats"
import Logout from "./Logout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import '../styles/Home.css'

function Home() {
  const [viewRules, setViewRules] = useState(false)
  const [viewStats, setViewStats] = useState(false)
  const [viewLogout, setViewLogout] = useState(false)

  const stats = <FontAwesomeIcon icon={faRankingStar} />
  const logout = <FontAwesomeIcon icon={faRightFromBracket} />
  const rules = <FontAwesomeIcon icon={faScaleBalanced} />
  const home = <FontAwesomeIcon icon={faHouse} />
  function handleRules() {
    if (viewStats === true) setViewStats(!viewStats)
    if (viewLogout === true) setViewLogout(!viewLogout)
    setViewRules(!viewRules)
    console.log('rules clicked')
  }

  function handleHome() {
    if (viewRules === true) setViewRules(!viewRules)
    if (viewStats === true) setViewStats(!viewStats)
    if (viewLogout === true) setViewLogout(!viewLogout)
    console.log('home clicked')
  }

  function handleStats() {
    if (viewRules === true) setViewRules(!viewRules)
    if (viewLogout === true) setViewLogout(!viewLogout)
    setViewStats(!viewStats)
    console.log('stats clicked')
  }

  function handleLogout() {
    if (viewRules === true) setViewRules(!viewRules)
    if (viewStats === true) setViewStats(!viewStats)
    setViewLogout(!viewLogout)
    console.log('stats clicked')
  }

  return (
    <div className='home-page'>
      <div className='home-body'>
        <div className='home-card'>
          <h2 className='greeting'>Welcome username!</h2>
          {viewStats ? <Stats /> : null}
          {viewRules ? <Rules /> : null}
          {viewLogout ? <Logout /> : null}
        </div>
      </div>

      <div className='footer'>
        <div className='footer-buttons'>
          <button className='footer-button' onClick={handleHome}>{home}</button>
          <button className='footer-button' onClick={handleStats}>{stats}</button>
          <button className='footer-button' onClick={handleRules}>{rules}</button>
          <button className='footer-button' onClick={handleLogout}>{logout}</button>
        </div>
      </div>
    </div>
  )
}

export default Home