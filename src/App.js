import React from "react"
import useHooks from "./useHooks"

function App() {
    const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount
    } = useHooks(10)
    
    return (
        <div>
            <h1>HOW FAST CAN YOU TYPE IN 10 SECONDS?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>TIME REMAINING: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                START
            </button>
            <h1>WORD COUNT: {wordCount}</h1>
        </div>
    )
}

export default App
