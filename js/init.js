/* init.js */

// Initialize when ready
$(document).ready(init);
function init() {
	board = generateBoard(10, 10);
	engine = new Engine(board);

	engine.start();
}

function generateBoard(numRows, numCols) {
	board = $("#board"); 
	board.empty(); 

	var cellStr = "<div class='cell'></div>";
	var rowStr = "<div class='row'></div>"
	var colStr = "<div class='col'></div>"

	for (i = 0; i < numRows; i++) {	
		var row = createDOMObject(rowStr); 
		board.append(row)
		for (j = 0; j < numCols; j++) {
			var cell = createDOMObject(cellStr);
			row.append(cell);
	
			// Randomly activate cells
			var rand = Math.floor(Math.random() * 2)
			if (rand == 0) {	
				cell.addClass("active");
			} else {
				cell.addClass("inactive");
			}
		}	
	}	

	return board;	
}

// Returns new DOM object from string
function createDOMObject(s) {
	return $("<div/>").html(s).contents();
}
