$(document).ready(function(){
  var dimensions = {width: 3, height: 3}
  var myConwayApp = new ConwayApp(dimensions)
  myConwayApp.attachFormListener('form#conway-data')
  myConwayApp.View.renderGrid()

  myConwayApp.attachCssCellStatuses()

  myConwayApp.cells.forEach(function(cell) {
    myConwayApp.assignNeighborIndexes(cell)
  })
  myConwayApp.advanceGeneration()
  setTimeout(function() {
    myConwayApp.advanceGeneration()
  }, myConwayApp.timeBetweenGenerations)
})