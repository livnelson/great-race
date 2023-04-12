// client/src/components/App.js
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
// import Signup from "./SignUp"
import Location from "./Location"
import '../styles/App.css'

function App() {
  const [nickname, setNickname] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch("/8MEBAA7K6yxrnYes5DTwgA7m-md23.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get_turn" }),
    }).then((r) => {
      // setIsLoading(false);
      if (r.ok) {
        r.json().then((gameData) => {
          console.log(gameData)
          setNickname(gameData.nickname)
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Signup setUser={setUser} />}/> */}
          <Route path="/login" element={<Login setNickname={setNickname} />}/>
          <Route path="/" element={<Home nickname={nickname} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App