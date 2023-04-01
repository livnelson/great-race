// client/src/components/App.js
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Signup from "./SignUp"
import '../styles/App.css'

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('/auth') 
    .then((r) => {
    if (r.ok) {
      r.json().then((userData) => {
        console.log(userData)
        setUser(userData)
      })
    }
  })
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup setUser={setUser} />}/>
          <Route path="/login" element={<Login setUser={setUser} />}/>
          <Route path="/home" element={<Home user={user} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App