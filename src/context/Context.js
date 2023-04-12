import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Context = createContext()

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

    useEffect(() => {
    fetch("/8MEBAA7K6yxrnYes5DTwgA7m-md23.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "get_turn" }),
    }).then((r) => {
      // setIsLoading(false);
        if (r.ok) {
            r.json().then((gameData) => {
            setGameData(gameData)
        })
        } else {
            r.json().then((err) => setErrors(err.errors))
        }
    })
    }, [])

    function submitAnswer(e){
        e.preventDefault()
        fetch(`/8MEBAA7K6yxrnYes5DTwgA7m-md23.php/${gameData.nickname}`, {
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
            submitAnswer
        }} >
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider