import { createContext, useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

export const Context = createContext()
const api_key = process.env.REACT_APP_PHP_URL

const ContextProvider = (props) => {
    const [errors, setErrors] = useState([])
    const [answer, setAnswer] = useState('')

    const [gameData, setGameData] = useState({
        nickname: '',
        body: '',
        turn: '',
        elapTime: '',
        turnTime: '',
        progress: '',
        totalTurns: '',
        ranking: '',
    })
    const storedGameData = localStorage.getItem("gameData");

    useEffect(() => {
        if (storedGameData){
            console.log("in Storage")
            setGameData(JSON.parse(storedGameData))
        } else {
            console.log("in fetch")
            fetch(`${api_key}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "get_turn" }),
            }).then((r) => {
            // setIsLoading(false);
                if (r.ok) {
                    r.json().then((gameData) => {
                        localStorage.setItem("gameData", JSON.stringify(gameData))
                        setGameData(gameData)
                })
                } else {
                    r.json().then((err) => setErrors(err.errors))
                }
            })
        }
    }, [storedGameData])

    function submitAnswer(e){
        e.preventDefault()
        fetch(`${api_key}/${gameData.nickname}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "get_turn", answer_type: answer})
        })
    }


    return (
        <Context.Provider value={{
            gameData,
            answer,
            setAnswer,
            submitAnswer,
            errors
        }} >
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider