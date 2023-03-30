import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Signup() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // setIsLoading(true);
    // fetch("/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username, password }),
    // }).then((r) => {
    //   setIsLoading(false);
    //   if (r.ok) {
    //     r.json().then((user) => {
    //       console.log(user)
    //     });
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // });
  }

  function handleLogin() {
    navigate('/login')
  }

  return (
    <div className='login-page'>
      <div>
      </div>
      <div className='login-body'>
        <div className="login-card">
          <img className='login-logo' src='https://res.cloudinary.com/dovuffpii/image/upload/v1679449812/mdays-great-race/monrovia-days-great-race-logo_yegeua.png' alt='MONROVIA-DAYS-GREAT-RACE-LOGO' />
          <h1 className='login-greeting'>Welcome to the Great Race!</h1>
          <p className='description'>Hunt for clues in a race for time through historic Old Town Monrovia!</p>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <input
                className="input-field"
                placeholder="Enter Username"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br />
              <input
                className="input-field"
                placeholder="Enter Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              {isLoading ? "Loading..." : null}
              <button className="login-button" type="submit">Sign In</button>
            </form>
          </div>
          {errors ? <div className="errors">{errors}</div> : null}
          <div onClick={handleLogin}>
            <p className="sign-up-link"> Did you already sign up?</p>
            <span className="login-form-link">Click here to login now.</span>
          </div>
          <div className="space"></div>
        </div>
      </div>
    </div>

  )
}

export default Signup