$(document).ready(function(){
  var dimensions = {height: 3, width: 3}
  var myLGA = new LifeGameApp(dimensions)
  myLGA.assignNeighborIndexes(myLGA.cells[0])
  myLGA.assignNumberOfLiveNeighbors(myLGA.cells[0])
})