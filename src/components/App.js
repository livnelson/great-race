// client/src/components/App.js
import { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import '../styles/App.css'
import ContextProvider from "../contexts/Context"

function App() {

  return (
    <BrowserRouter>
      <ContextProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App