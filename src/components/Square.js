import React from "react"

const Square = ( {board, handleClick} ) => {
  // Two options to reference props
  // console.log("props", props.board) // when using props as the parameter, it requires dot notation to obtain a specific key

  // destructure a specific property
  // {board} - referencing the name assigned to the prop passed from App.js
  console.log("board", board)
  // output: ['?', '?', '?', '?', '?', '?', '?', '?', '?']

  return (
    <>
      <div className="grid">
        {board.map((square, index) => {
          return(
            <div 
              className="square" 
              key={index}
              onClick={() => handleClick(index)}
            >
              {square}
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Square
