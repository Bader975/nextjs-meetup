import React, { useState } from 'react'

export default function game({ numPalyer = 4, taget = 5 }) {
    const [scores, steScores] = useState(new Array(numPalyer).fill(0))
    const [winner, setWinner] = useState("")

    function incrementScore(index) {
        if (!gameOver) {
            steScores(prevScores => {
                return prevScores.map((score, inx) => {
                    return index === inx ? score + 1 : score

                })
            })
        }
    }

    function reset() {

        if (confirm('Resetting all Scores')) {

            steScores(new Array(numPalyer).fill(0))
        }
        return;
    }
    let gameOver;
    let winnerName;
    return (
        <>
            <h1>Game Keeper</h1>

            <ul>
                {scores.map((score, index) => {
                    return (
                        <>
                            
                            {score >= taget ? <h1>The WINNER IS player number : {gameOver = true}{index+1}</h1>  : null}
                            <li key={index}>Player {index + 1}: {score}</li>
                            <button style={{ backgroundColor: "grey", color: "#fff" }} 
                            onClick={() => incrementScore(index)}>+1</button>
                            <h3>{score >= taget && "WINNER"}</h3>
                        </>
                    )
                })}
            </ul>

            <button onClick={reset}>RESET</button>
        </>
    )
}
