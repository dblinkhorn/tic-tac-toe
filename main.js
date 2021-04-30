// stores all game board grid squares
let gridSquares = document.querySelectorAll("#square");

gridSquares.forEach( function (square) {
  // will detect a user click and
  square.addEventListener("click", function () {
    // if clicked, runs handlePlayerMove function
    updateGameBoard(square.id)
  });


const gameBoard = () => {
  var gameBoardArray = ["X", "X", "O",
                        "O", "O", "X",
                        "X", "O", "O"];

  const updateGameBoard = (playerMove) => {

    // use clicked div to display player's mark and update the gameBoardArray with that div's id
    var clickedSquare = document.getElementById(playerMove);
    gameBoardArray[clickedSquare] = "X";

    // remove event listener from the clicked div

  }

  return { updateGameBoard }
}

  // function to handle player move
    // function to make sure grid square isn't already taken
    // function to check for win/tie condition

// player object
  // player name



  // ai player will go here