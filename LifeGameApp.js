var LifeGameApp = function(dimensions) {
  this.board = new GameBoard(dimensions)
  this.width = this.board.width
  this.height = this.board.height
  this.cells = this.instantiateCells(this.board.totalUnits)
}

var prototype = {

  instantiateCells : function(totalCells) {
    var cells = []
    var x = 0
    var y = 0
    cells.push(new Cell([x,y], x, this.board.width, this.board.height))
    x += 1
    cells.push(new Cell([x,y], x, this.board.width, this.board.height))

    for (var i=0; i<totalCells-2; i++) {
      if(x == this.width-1) {
        x = 0
        y += 1
      } else {
        x += 1
      }
      cells.push(new Cell([x,y], i+2, this.board.width, this.board.height))
    }
    return cells
  }
}

LifeGameApp.prototype = prototype

// Determine number of live neighboring cells
// Advance a Generation