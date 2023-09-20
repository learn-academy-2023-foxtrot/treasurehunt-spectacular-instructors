import React from "react";

const NewGame = ({reStart}) => {
  return(
    <div id="center">
      <button onClick={reStart}>
        Play Again
      </button>
    </div>
  )
}

export default NewGame