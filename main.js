const gameBoard = () => {

  // array to store the gameboard
  var _gameBoardArray = Array(9).fill("");

  // stores all game board grid squares
  let _gridSquares = document.querySelectorAll(".square");

  _gridSquares.forEach( function (square) {
    // will detect a user click and
    square.addEventListener("click", function() {
      // if clicked, runs handlePlayerMove function
      _updateGameBoard(square.id);
    });
  });

  // let gameBoardDiv = document.getElementById("gameboard");
  // const playAgain = function() { location.reload() };
  // gameBoardDiv.classList = "play-again";
  // gameBoardDiv.textContent = "Play again?";
  // gameBoardDiv.addEventListener("click", function() {
  //   playAgain;
  // });

  var markToggle = true;
  var playerMark = "X";

  const _playerToggle = () => {
    if (markToggle) {
      playerMark = "X";
      markToggle = false;
    } else {
      playerMark = "O";
      markToggle = true;
    }
  }

  // function to handle a player's move
  const _updateGameBoard = (playerMove) => {
    if (_gridSquares.item(playerMove).classList.contains("clicked")) {
      return;
    }

    _playerToggle();

    _gameBoardArray[Number(playerMove)] = playerMark;
    _gridSquares.item(playerMove).textContent = playerMark;
    _gridSquares.item(playerMove).classList.add("clicked");
    _checkForWin(_gameBoardArray);
  }

  const _declareWinner = (winner) => {
    let titleDiv = document.getElementById("title-h1");

    if (winner === "X") {
      titleDiv.textContent = "X wins the game!";
    }
    if (winner === "O") {
      titleDiv.textContent = "O wins the game!"
    }
    if (winner === "tie") {
      titleDiv.textContent = "It's a tie!"
    }
  }

  const _checkForWin = (_gameBoardArray) => {

    if (!_gameBoardArray.includes("")) {
      _declareWinner("tie");
    }

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
  return { _gameBoardArray, playAgain };
}

// instantiate main game object (gameBoard) to access its public variables and functions
let game = gameBoard();

// player object
  // player name



  // ai player will go here