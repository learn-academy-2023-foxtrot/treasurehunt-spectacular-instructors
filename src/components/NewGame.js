import React from "react";

const NewGame = ({reStart, counter}) => {
  return(
    <>
      {counter > 0 && 
        <h2> Plays left: {counter}</h2>
      }

      {counter < 0 && 
        <h3> No plays left</h3>
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