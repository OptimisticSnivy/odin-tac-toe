function gameBoard(arr) {
	this.arr = arr;
	function showBoard() {
		console.log(arr[0]);
	}
	function setMark(i,j) { arr[i][j] = "O"}
	function setCross(i,j) { arr[i][j] = "X"}
	function isColWin() {
		return arr[0] == ["O","O","O"];
	}
	return { arr, showBoard, setMark, setCross, isColWin };
}


let arr = [[],[],[]];
let game = gameBoard(arr);
game.setMark(0,0);
game.setMark(0,1);
game.setMark(0,2);
game.showBoard();
console.log(game.isColWin());
