var ConwayView = function(domContainer, dimensions, avatar) {
  this.$container = $(domContainer)
  this.width = dimensions.width
  this.height = dimensions.height
  this.avatar = avatar
  this.renderGrid()
  this.$td = $(domContainer+' '+'td')
  this.giveTdIndexes()
  this.makeTdsIntoSquares()
  return this
}

var prototype = {
  renderGrid : function() {
    for (var index=0; index<this.height; index++) {
      this.$container.append('<tr>'+('<td>'+this.avatar+'</td>').repeat(this.width)+'</tr>')
    }
  },
  giveTdIndexes: function() {
    this.$td.each(function(index) {this.setAttribute('id', index)})
  },
  attachClassToTd : function(cellTdIndex, cssClass) {
    this.$td.eq(cellTdIndex).removeClass().addClass(cssClass)
  },
  makeTdsIntoSquares : function() {
    var averagePxForEachTd = $('div.grid-area').width()/this.width
    this.$td.css('width',averagePxForEachTd)
    this.$td.css('height',averagePxForEachTd)
  }
}

ConwayView.prototype = prototype