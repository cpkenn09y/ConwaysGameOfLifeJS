$(document).ready(function(){
  $('form#conway-data').on('submit', function(event) {
    event.preventDefault()
    var conwayFormData = FormHelper.retrieveData(this)
    var dimensions = {width: conwayFormData.width, height: conwayFormData.height}

    myConwayApp = new ConwayApp(dimensions)
    myConwayApp.initializeGame()

    var generationCounter = 0
    setIntervalX(function() {
      myConwayApp.advanceGeneration()
      // console.log(++generationCounter)
    }, myConwayApp.timeBetweenGenerations, Number(conwayFormData.maxGenerations))
  })
})