var GameBoard = function(dimensions) {
  this.height = dimensions.height
  this.width = dimensions.width
  this.totalCells = this.width * this.height
  this.state = this.instantiateCells(this.totalCells)
}

var prototype = {
  instantiateCells : function(totalCells) {
    var cells = []
    for (i=0; i<totalCells; i++) {
      cells.push(new Cell())
    }
    return cells
  }
}

GameBoard.prototype = prototype