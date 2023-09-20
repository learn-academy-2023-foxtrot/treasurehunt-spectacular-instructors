import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"
import NewGame from "./components/NewGame"

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
    let bombIndex = Math.floor(Math.random() * board.length)

    if(bombIndex === treasureIndex) {
      board[selectedIndex]="🌧️"
      setBoard([...board])
    } else if(treasureIndex === selectedIndex) {
      board[selectedIndex]="☀️"
      setBoard([...board])
    } else if(bombIndex === selectedIndex) {
      board[selectedIndex]="🌧️"
      setBoard([...board])
    } else {
    board[selectedIndex]="🏖️"
    setBoard([...board])
    }
  }

  const reStart = () => {
    setBoard(Array(9).fill("?"))
  } 
  
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick}/>
      <NewGame reStart={reStart}/>
    </>
  )
}

export default App
