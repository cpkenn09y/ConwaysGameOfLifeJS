$(document).ready(function(){
  var dimensions = {width: 30, height: 30}
  myConwayApp = new ConwayApp(dimensions)
  myConwayApp.initializeGame()

  setInterval(function() {
    myConwayApp.advanceGeneration()
    myConwayApp.attachCssCellStatuses()
  }, myConwayApp.timeBetweenGenerations)
})