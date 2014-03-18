var GameBoard = function(amount) {
  this.board = this.instantiateCells(amount)
}

GameBoard.prototype.instantiateCells = function(amount) {
  var cells = []
  for (i=0; i<amount; i++) {
    cells.push(new Cell())
  }
  return cells
}
