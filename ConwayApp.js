var ConwayApp = function(dimensions) {
  this.board = new GameBoard(dimensions)
  this.width = this.board.width
  this.height = this.board.height
  this.cells = this.instantiateCells(this.board.totalUnits)
  this.legend = this.createCoordinatesToIndexesMapping()
}

var prototype = {

  instantiateCells : function(totalCells) {
    var cells = []
    var x = 0
    var y = 0
    cells.push(new Cell([x,y], x, this.board.width, this.board.height))
    x += 1
    cells.push(new Cell([x,y], x, this.board.width, this.board.height))

    for (var index=2; index<totalCells; index++) {
      if(x == this.width-1) {
        x = 0
        y += 1
      } else {
        x += 1
      }
      cells.push(new Cell([x,y], index, this.board.width, this.board.height))
    }
    return cells
  },
  createCoordinatesToIndexesMapping: function() {
    var coordinatesToIndexes = {}
    this.cells.forEach(function(cell, index){
      coordinatesToIndexes[cell.coordinate] = index
    })
    return coordinatesToIndexes
  },
  assignNeighborIndexes : function(cell) {
    var self = this
    cell.neighborIndexes = cell.neighborCoordinates.map(function(neighborCoordinate) {
      return self.legend[''+neighborCoordinate]
    })
    return this.cells
  },
  assignNumberOfLiveNeighbors : function(cell) {
    var self = this
    cell.numberOfLiveNeighbors = _.filter(cell.neighborIndexes, function(neighborIndex) {
      return self.cells[neighborIndex].status == 'ON'
    }).length
  }
}

ConwayApp.prototype = prototype