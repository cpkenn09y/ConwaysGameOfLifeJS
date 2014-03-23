var ConwayView = function(domGridContainer, domGenerationCounter, dimensions, avatar) {
  this.$container = $(domGridContainer)
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
    for (var index=0; index<this.height; index++) {
      this.$container.append('<tr>'+('<td>'+this.avatar+'</td>').repeat(this.width)+'</tr>')
    }
    if (this.width > 30) { this.$container.css('font-size', 8) }
  },
  giveTdIndexes: function() {
    this.$td.each(function(index) {this.setAttribute('id', index)})
  },
  attachClassToTd : function(cellTdIndex, cssClass) {
    this.$td.eq(cellTdIndex).removeClass().addClass(cssClass)
  },
  makeTdsIntoSquares : function() {
    var averagePxForEachTd = $('#grid-area').width()/this.width
    this.$td.css('width',averagePxForEachTd)
    this.$td.css('height',averagePxForEachTd)
  },
  appendGenerationCounter : function() {
    this.$generation.append("<h1>Generation Number: <span id='generation-counter'>0</span></h1>")
  },
  updateGenerationCounter : function(generationNumber) {
    $('span#generation-counter').text(generationNumber)
  }

}

ConwayView.prototype = prototype