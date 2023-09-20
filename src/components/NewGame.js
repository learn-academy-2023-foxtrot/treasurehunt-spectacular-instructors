import React from "react";

const NewGame = ({reStart, counter, board}) => {
  return(
    <>
      {board.includes("☀️") && 
        <h2>🏝 You won. ☀️ Enjoy your beach day 🥥</h2>
      }

      {board.includes("🌧️") && 
        <h2>Sorry, your beach umbrella ⛱️ is being used for rain 🌧️.</h2>
      }

      {counter > 0 && 
        <h2> Plays left: {counter}</h2>
      }

      {counter < 0 && 
        <h3> No plays left. You have lost.</h3>
      }
      <div id="center">
        <button onClick={reStart}>
          Play Again
        </button>
      </div>
    </>
  )
}

export default NewGame