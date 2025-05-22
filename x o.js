let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const boardElement = document.getElementById("board");
const statusText = document.getElementById("status");

function drawBoard() {
  boardElement.innerHTML = "";
  board.forEach((cell, index) => {
    const button = document.createElement("button");
    button.classList.add("cell");
    button.textContent = cell;
    button.onclick = () => makeMove(index);
    boardElement.appendChild(button);
  });
}

function makeMove(index) {
  if (board[index] === "" && !gameOver) {
    board[index] = currentPlayer;
    if (checkWin()) {
      statusText.textContent = `🎉 Le joueur ${currentPlayer} a gagné !`;
      gameOver = true;
    } else if (board.every(cell => cell !== "")) {
      statusText.textContent = "Match nul 🤝 !";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusText.textContent = `C'est au tour de ${currentPlayer}`;
    }
    drawBoard();
  }
}

function checkWin() {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8], // lignes
    [0,3,6], [1,4,7], [2,5,8], // colonnes
    [0,4,8], [2,4,6]           // diagonales
  ];

  return wins.some(combination => {
    const [a, b, c] = combination;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  statusText.textContent = "Joueur X commence";
  drawBoard();
}

drawBoard();