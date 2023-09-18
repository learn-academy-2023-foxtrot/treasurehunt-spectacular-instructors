import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleClick = (selectedIndex) => {
    // return something

    // treasure location
    let treasureIndex = Math.floor(Math.random() * board.length)
    console.log("treasure", treasureIndex)
    if(treasureIndex === 6) {
      board[selectedIndex]="☀️"
      setBoard([...board])
    } else {
    board[selectedIndex]="🏖️"
    setBoard([...board])
    }
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick}/>
    </>
  )
}

export default App
