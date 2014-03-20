$(document).ready(function(){
  var dimensions = {height: 3, width: 3}
  var myCA = new ConwayApp(dimensions)
  myCA.cells.forEach(function(cell) {
    myCA.assignNeighborIndexes(cell)
  })
  myCA.advanceGeneration()
  setTimeout(function() {
    myCA.advanceGeneration()
  }, 2000)
})