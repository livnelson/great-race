import React, { useState } from 'react'
import Rules from './Rules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'

function Footer( ) {
  const stats = <FontAwesomeIcon icon={faRankingStar} />
  const logout = <FontAwesomeIcon icon={faRightFromBracket} />
  const rules = <FontAwesomeIcon icon={faScaleBalanced} />

  const [viewRules, setViewRules] = useState(false)

  function handleRules(){
  setViewRules(!viewRules)
}

  return (
    <div className='footer'>
      <div className='footer-buttons'>
        {/* {viewRules ? <Rules /> : null} */}
        <button className='footer-button'>{stats}</button>
        <button className='footer-button' onClick={handleRules}>{rules}</button>
        <button className='footer-button'>{logout}</button>
      </div>
    </div>
  )
}

export default Footer