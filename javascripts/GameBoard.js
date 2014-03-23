var GameBoard = function(dimensions) {
  this.height = dimensions.height
  this.width = dimensions.width
  this.totalUnits = this.width * this.height
  return this
}