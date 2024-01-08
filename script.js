function gameBoard() {
  return {
    marr: [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ],
    setCross(i, j) {
      this.marr[i][j] = 1;
    },
    setMark(i, j) {
      this.marr[i][j] = 0;
    },
    getGame(i) {
      return this.marr[i];
    },
  };
}

let game = gameBoard();
// User Interface
let delegate = document.querySelector(".delegate");
let gridContainer = document.createElement("div");
gridContainer.className = "gridContainer";

let grid = document.createElement("div");
let classNaming = "grid";
grid.className = classNaming;

let n = 3;

for (let i = 0; i < n; i++) {
  gridContainer.appendChild(grid.cloneNode(true));
}

for (let i = 0; i < n; i++) {
  delegate.appendChild(gridContainer.cloneNode(true));
}

let setPiece = document.body.querySelector(".delegate");
setPiece.addEventListener("click", function (event) {
  if (event.target.classList.contains("grid")) {
    if (flag < 9) {
      if (flag % 2 == 0) {
        flag += 1;
        event.target.style.backgroundColor = "red";
        console.log(flag);
      } else {
        flag += 1;
        event.target.style.backgroundColor = "gold";
        console.log(flag);
      }
    }
  }
});
let flag = 0;

console.log(game.getGame(0));
console.log(game.getGame(1));
console.log(game.getGame(2));
