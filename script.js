function gameBoard() {
	return {
		marr: [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],
		setCross(i,j){
			this.marr[i][j] = 1;
		},
		setMark(i,j){
			this.marr[i][j] = 0;
		},
		getGame(i) {
			return this.marr[i];
		},
	};
}

let game = gameBoard();
game.setMark(0,0);
game.setMark(0,1);
game.setMark(0,2);
console.log(game.getGame(0));
console.log(game.getGame(1));
console.log(game.getGame(2));

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

let btn = document.querySelector(".gridContainer");
console.log(btn);
btn.addEventListener("click",function(){
	console.log("Set Cross/Mark!");
});
