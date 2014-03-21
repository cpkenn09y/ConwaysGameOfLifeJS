$(document).ready(function(){
  var dimensions = {width: 5, height: 7}
  var myConwayApp = new ConwayApp(dimensions)
  myConwayApp.attachFormListener('form#conway-data')
  var myView = new ConwayView('div.grid-area table', dimensions, '*  -  *')
  myView.createGrid()

  myConwayApp.cells.forEach(function(cell) {
    myConwayApp.assignNeighborIndexes(cell)
  })
  myConwayApp.advanceGeneration()
  setTimeout(function() {
    myConwayApp.advanceGeneration()
  }, myConwayApp.timeBetweenGenerations)
})