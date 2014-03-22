var ConwayView = function(domElement, dimensions, avatar) {
  this.$el = $(domElement)
  this.width = dimensions.width
  this.height = dimensions.height
  this.avatar = avatar
  return this
}

var prototype = {
  renderGrid : function() {
    for (var index=0; index<this.height; index++) {
      this.$el.append('<tr>'+('<td>'+this.avatar+'</td>').repeat(this.width)+'</tr>')
    }
  },
  giveTdIndexes: function() {
    $('div.grid-area td').each(function(index) {this.setAttribute('id', index)})
  },
  attachClassToTd : function(cellTdIndex, cssClass) {
    $('div.grid-area td').eq(cellTdIndex).removeClass().addClass(cssClass)
  }
}

ConwayView.prototype = prototype