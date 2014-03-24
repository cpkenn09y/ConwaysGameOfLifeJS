var ConwayView = function(domGridContainer, domGenerationCounter, dimensions, avatar) {
  this.$gridContainer = $(domGridContainer)
  this.$generation = $(domGenerationCounter)
  this.width = dimensions.width
  this.height = dimensions.height
  this.avatar = avatar
  this.renderGrid()
  this.$td = $(domGridContainer+' '+'td')
  this.giveTdIndexes()
  this.makeTdsIntoSquares()
  return this
}

var prototype = {
  renderGrid : function() {
    if (this.width > 30) { this.$gridContainer.css('font-size', 8) }
    if (this.width > 50) { this.avatar = ''}
    for (var index=0; index<this.height; index++) {
      this.$gridContainer.append('<tr>'+('<td>'+this.avatar+'</td>').repeat(this.width)+'</tr>')
    }

  },
  giveTdIndexes: function() {
    this.$td.each(function(index) {this.setAttribute('id', index)})
  },
  attachClassToTd : function(cellTdIndex, cssClass) {
    if (this.$td[cellTdIndex].className == cssClass) {
      return
    } else {
      this.$td.eq(cellTdIndex).removeClass().addClass(cssClass)
    }
  },
  makeTdsIntoSquares : function() {
    var averagePxForEachTd = $('#grid-area').width()/this.width
    this.$td.css('width',averagePxForEachTd)
    this.$td.css('height',averagePxForEachTd)
  },
  appendGenerationCounter : function() {
    this.$generation.append("<h1><span id='generation-intro'>Generation Number: </span><span id='generation-counter'>0</span> -&#187<span id='click-tip'>Try Clicking on Squares!</span></h1>")
  },
  updateGenerationCounter : function(generationNumber) {
    $('span#generation-counter').text(generationNumber)
  },
  appendNameToDom : function(name) {
    $('div#name-area').append("<a href='#' target='_blank'><h1 class='title' id='user'><span class='header'>* "+name+"'s"+' '+'Game of Life *</span></h1></a>')
  },
  appendStartButton : function() {
    $('div#start-button').append("<button class='submit-button' id='start'>Start!</button>")
  },
  removeStartButton : function() {
    $('div#start-button').remove()
  },
  expandContainer : function() {
    $('div.container').css('width', '100%')
  }
}

ConwayView.prototype = prototype