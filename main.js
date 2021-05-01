const gameBoard = () => {
  // var _gameBoardArray = [
  //   "X", "X", "O",
  //   "O", "O", "X",
  //   "X", "O", "O"
  // ];

  var _gameBoardArray = Array(9).fill("none");

  // stores all game board grid squares
  let _gridSquares = document.querySelectorAll(".square");

  _gridSquares.forEach( function (square) {
    // will detect a user click and
    square.addEventListener("click", function() {
      // if clicked, runs handlePlayerMove function
      _updateGameBoard(square.id);
    });
  });

  // function to handle a player's move
  const _updateGameBoard = (playerMove) => {
    if (_gridSquares.item(playerMove).classList.contains("clicked")) {
      console.log("already clicked");
      return;
    }
    _gameBoardArray[Number(playerMove)] = "X";
    _gridSquares.item(playerMove).textContent = "X";
    _gridSquares.item(playerMove).classList.add("clicked");
    _checkForWin(_gameBoardArray);
  }

  const _declareWinner = (winner) => {
    let titleDiv = document.getElementById("title");

    if (winner === "X") {
      titleDiv.textContent = "X wins the game!"
    }
    if (winner === "O") {
      titleDiv.textContent = "X wins the game!"
    }
    if (winner === "tie") {
      titleDiv.textContent = "It's a tie!"
    }
  }

  const _checkForWin = (_gameBoardArray) => {

    // horizontal wins

    if (
      _gameBoardArray[0] === "X" &&
      _gameBoardArray[1] === "X" &&
      _gameBoardArray[2] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[3] === "X" &&
      _gameBoardArray[4] === "X" &&
      _gameBoardArray[5] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[6] === "X" &&
      _gameBoardArray[7] === "X" &&
      _gameBoardArray[8] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[0] === "O" &&
      _gameBoardArray[1] === "O" &&
      _gameBoardArray[2] === "O"
    ) { _declareWinner("O"); return; };

    if (
      _gameBoardArray[3] === "O" &&
      _gameBoardArray[4] === "O" &&
      _gameBoardArray[5] === "O"
    ) { _declareWinner("O"); return; };

    if (
      _gameBoardArray[6] === "O" &&
      _gameBoardArray[7] === "O" &&
      _gameBoardArray[8] === "O"
    ) { _declareWinner("O"); return; };

    // vertical wins

    if (
      _gameBoardArray[0] === "X" &&
      _gameBoardArray[3] === "X" &&
      _gameBoardArray[6] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[1] === "X" &&
      _gameBoardArray[4] === "X" &&
      _gameBoardArray[7] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[2] === "X" &&
      _gameBoardArray[5] === "X" &&
      _gameBoardArray[8] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[0] === "O" &&
      _gameBoardArray[3] === "O" &&
      _gameBoardArray[6] === "O"
    ) { _declareWinner("O"); return; };

    if (
      _gameBoardArray[1] === "O" &&
      _gameBoardArray[4] === "O" &&
      _gameBoardArray[7] === "O"
    ) { _declareWinner("O"); return; };

    if (
      _gameBoardArray[2] === "O" &&
      _gameBoardArray[5] === "O" &&
      _gameBoardArray[8] === "O"
    ) { _declareWinner("O"); return; };

    // horiztonal wins

    if (
      _gameBoardArray[0] === "X" &&
      _gameBoardArray[4] === "X" &&
      _gameBoardArray[8] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[2] === "X" &&
      _gameBoardArray[4] === "X" &&
      _gameBoardArray[6] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[0] === "O" &&
      _gameBoardArray[4] === "O" &&
      _gameBoardArray[8] === "O"
    ) { _declareWinner("O"); return; };

    if (
      _gameBoardArray[2] === "O" &&
      _gameBoardArray[4] === "O" &&
      _gameBoardArray[6] === "O"
    ) { _declareWinner("O"); return; };
  }
}

// instantiate main game object (gameBoard) to access its public variables and functions
let game = gameBoard();

// player object
  // player name



  // ai player will go here