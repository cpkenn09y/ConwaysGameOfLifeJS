var ConwayApp = function(dimensions, name) {
  this.board = new GameBoard(dimensions)
  this.width = this.board.width
  this.height = this.board.height
  this.cells = this.instantiateCells(this.board.totalUnits)
  this.legend = this.createCoordinatesToIndexesMapping()
  this.timeBetweenGenerations = 1000
  this.timeUntilTriggerVerdict = this.timeBetweenGenerations / 2
  this.View = new ConwayView('#grid-area table', '#generation-counter', dimensions, 'Etsy', name)
  this.generation = 0
  this.assignNeighborIndexes()
}

var prototype = {

  initializeGame : function() {
    this.attachCssCellStatuses()
  },
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
  assignNeighborIndexes : function() {
    var self = this
    this.cells.forEach(function(cell) {
      cell.neighborIndexes = cell.neighborCoordinates.map(function(neighborCoordinate) {
        return self.legend[''+neighborCoordinate]
      })
    })
    return this.cells
  },
  assignNumberOfLiveNeighbors : function(cell) {
    var self = this
    cell.numberOfLiveNeighbors = _.filter(cell.neighborIndexes, function(neighborIndex) {
      return self.cells[neighborIndex].status == 'ON'
    }).length
  },
  advanceGeneration : function() {
    var self = this
    this.cells.forEach(function(cell) {
      self.assignNumberOfLiveNeighbors(cell)
      setTimeout(function() {
        cell.status = self.getStatusVerdict(cell.numberOfLiveNeighbors, cell.status)
      }, self.timeUntilTriggerVerdict)
    })
    setTimeout(function() {
      self.attachCssCellStatuses()
      self.generation += 1
      self.View.updateGenerationCounter(self.generation)
    }, self.timeUntilTriggerVerdict)
  },
  getStatusVerdict : function(numberOfLiveNeighbors, currentStatus) {
    if (numberOfLiveNeighbors < 2) {
      return "OFF"
    } else if (numberOfLiveNeighbors == 2) {
      return currentStatus
    } else if (numberOfLiveNeighbors == 3) {
      return "ON"
    } else if (numberOfLiveNeighbors > 3) {
      return "OFF"
    }
  },
  attachCssCellStatuses: function() {
    var self = this
    this.cells.forEach(function(cell,index) {
      self.View.attachClassToTd(index, cell.status)
    })
  },
  enableTogglingGridUnits : function() {
    var self = this
    $('div#grid-area td').on('click', function() {
      if (this.className == "OFF") {
        self.cells[Number(this.id)].status = "ON"
        self.View.attachClassToTd(this.id, "ON")
      } else {
        self.cells[Number(this.id)].status = "OFF"
        self.View.attachClassToTd(this.id, "OFF")
      }
    })
  }

}

ConwayApp.prototype = prototype