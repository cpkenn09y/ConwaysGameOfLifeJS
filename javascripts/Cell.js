var Cell = function(coordinate, nthCell, boardWidth, boardHeight){
  this.status = Math.random() < 0.5 ? "ON" : "OFF"
  this.coordinate = coordinate
  this.x = coordinate[0]
  this.y = coordinate[1]
  this.index = nthCell
  this.neighborCoordinates = this.getNeighborCoordinates(boardWidth, boardHeight)
  return this
}

var prototype = {
  getNeighborCoordinates : function(boardWidth, boardHeight) {
    var northWest = [this.x-1, this.y+1]
    var north = [this.x, this.y+1]
    var northEast = [this.x+1, this.y+1]
    var west = [this.x-1, this.y]
    var east = [this.x+1, this.y]
    var southWest = [this.x-1, this.y-1]
    var south = [this.x, this.y-1]
    var southEast = [this.x+1, this.y-1]
    var possibleNeighborCoordinates = [northWest, north, northEast, west, east, southWest, south, southEast]
    return _.filter(possibleNeighborCoordinates, function(coordinate) {
      return coordinate[0] >= 0 && coordinate[0] < boardWidth && coordinate[1] >= 0 && coordinate[1] < boardHeight
    })
  }
}

Cell.prototype = prototype



