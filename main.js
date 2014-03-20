$(document).ready(function(){
  var dimensions = {height: 3, width: 3}
  var myCA = new ConwayApp(dimensions)
  myCA.assignNeighborIndexes(myCA.cells[0])
  myCA.assignNumberOfLiveNeighbors(myCA.cells[0])
})