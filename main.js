// stores all game board grid squares
let gridSquares = document.querySelectorAll("#square");

gridSquares.forEach( function (square) {
  // will detect a user click and
  square.addEventListener("click", function () {
    // if clicked, runs handlePlayerMove function
    updateGameBoardArray(square.id)
  });


const gameBoard = (playerMove) => {
  var gameBoardArray = ["X", "X", "O",
                        "O", "O", "X",
                        "X", "O", "O"];

  var playerMove = document.getElementById("")

  const updateGameBoardArray = (playerMove) => {

    // use clicked div to display player's mark and update the gameBoardArray with that div's id

    // remove event listener from the clicked div

  }

  const updateGameBoardDiv = (playerMove)

  return { gameBoardArray, handlePlayerMove }
}

  // function to handle player move
    // function to make sure grid square isn't already taken
    // function to check for win/tie condition

// player object
  // player name