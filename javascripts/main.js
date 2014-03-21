$(document).ready(function(){
  var dimensions = {width: 3, height: 3}
  myConwayApp = new ConwayApp(dimensions)
  myConwayApp.attachFormListener('form#conway-data')
  myConwayApp.View.renderGrid()

  myConwayApp.attachCssCellStatuses()

  myConwayApp.advanceGeneration()
  // setTimeout(function() {
  //   myConwayApp.advanceGeneration()
  // }, myConwayApp.timeBetweenGenerations)
})