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
    getGame() {
      return this.marr;
    },
  };
}

let game = gameBoard();

function createGrid(rows, cols) {
  var gridContainer = document.querySelector(".grid-container");

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      // Use a function to create a closure over i and j
      (function (row, col) {
        var cell = document.createElement("div");
        cell.id = "cell" + row + col;
        cell.className = "grid-cell";
        // cell.textContent = row + "" + col;

        // Attach a click event listener to each cell
        cell.addEventListener("click", function (event) {
          handleGridClick(row, col);
          if (flag < 9) {
            if (flag % 2 == 0) {
              flag += 1;
              event.target.style.backgroundColor = "gold";
              game.setCross(row, col);
              console.log(flag);
              console.log(game.getGame());
            } else {
              flag += 1;
              event.target.style.backgroundColor = "red";
              game.setMark(row, col);
              console.log(flag);
              console.log(game.getGame());
            }
          }
        });

        gridContainer.appendChild(cell);
      })(i, j);
    }
    gridContainer.appendChild(document.createElement("br"));
  }
}

let flag = 0;
// Function to handle grid cell click
function handleGridClick(row, col) {
  var clickedCell = document.getElementById("cell" + row + col);
  console.log("Clicked on cell: " + row + ", " + col);
  // You can perform further actions based on the clicked cell
}

// Call the function to create the 9x9 grid
createGrid(3, 3);
// // User Interface
// let delegate = document.querySelector(".delegate");
// let gridContainer = document.createElement("div");
// gridContainer.className = "gridContainer";
//
// let grid = document.createElement("div");
// let classNaming = "grid";
// grid.className = classNaming;
//
// let n = 3;
//
// for (let i = 0; i < n; i++) {
//   gridContainer.appendChild(grid.cloneNode(true));
// }
//
// for (let i = 0; i < n; i++) {
//   delegate.appendChild(gridContainer.cloneNode(true));
// }
//
// let setPiece = document.body.querySelector(".delegate");
// setPiece.addEventListener("click", function (event) {
//   if (event.target.classList.contains("grid")) {
//     if (flag < 9) {
//       if (flag % 2 == 0) {
//         flag += 1;
//         event.target.style.backgroundColor = "red";
//         console.log(flag);
//       } else {
//         flag += 1;
//         event.target.style.backgroundColor = "gold";
//         console.log(flag);
//       }
//     }
//   }
// });
// let flag = 0;
//
// console.log(game.getGame(0));
// console.log(game.getGame(1));
// console.log(game.getGame(2));
