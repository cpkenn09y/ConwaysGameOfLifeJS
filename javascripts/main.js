$(document).ready(function(){
  $('form#conway-data').on('submit', function(event) {
    event.preventDefault()
    var conwayFormData = FormHelper.retrieveData(this)
    FormHelper.remove('div#input-area')
    $('body').css('background-image', 'none')
    $('body').css('background-color', 'antiquewhite')
    $('div.container').css('background-color', 'transparent')

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