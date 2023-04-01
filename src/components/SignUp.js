import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Signup({ setUser }) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    const userObj = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }

    setIsLoading(true);
    fetch("http://216.165.251.52:3333/signup", {
      // mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          console.log(user)
          setUser(user)
          navigate('/home')
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
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
                placeholder="Enter Your First and Last Name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br />
              <input
                className="input-field"
                placeholder="Enter Your Email Address"
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input
                className="input-field"
                placeholder="Create Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <input
                className="input-field"
                placeholder="Re-enter Password"
                type="password"
                id="passwordConfirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
              />
              <br />
              {isLoading ? "Loading..." : null}
              <button className="login-button" type="submit">Sign Up</button>
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