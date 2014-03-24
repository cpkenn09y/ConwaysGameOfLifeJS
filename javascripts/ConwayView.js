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
    this.$generation.append("<h1>Generation Number: <span id='generation-counter'>0</span></h1>")
  },
  updateGenerationCounter : function(generationNumber) {
    $('span#generation-counter').text(generationNumber)
  },
  appendNameToDom : function(name) {
    $('div#name-area').append("<h1 class='title'>*"+name+"'s"+' '+'Game of Life*</h1>')
  }

}

ConwayView.prototype = prototype