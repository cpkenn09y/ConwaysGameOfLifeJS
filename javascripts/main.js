$(document).ready(function(){
  $('form#conway-data').on('submit', function(event) {
    event.preventDefault()
    var conwayFormData = FormHelper.retrieveData(this)
    FormHelper.remove('div#input-area')

    var dimensions = {width: conwayFormData.width, height: conwayFormData.height}
    var myConwayApp = new ConwayApp(dimensions, conwayFormData.name)
    myConwayApp.initializeGame()
    myConwayApp.enableTogglingGridUnits()
    myConwayApp.View.appendNameToDom(conwayFormData.name)
    myConwayApp.View.appendGenerationCounter()

    setIntervalX(function() {
      myConwayApp.advanceGeneration()
    }, myConwayApp.timeBetweenGenerations, Number(conwayFormData.maxGenerations))
  })
})