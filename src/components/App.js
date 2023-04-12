// client/src/components/App.js
import { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import '../styles/App.css'
import ContextProvider from "../context/Context"

function App() {
  const {gameData} = useContext(Context)

  return (
    <BrowserRouter>
      <ContextProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login setNickname={setNickname} />}/>
            <Route path="/" element={<Home nickname={nickname} />}/>
          </Routes>
        </div>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App