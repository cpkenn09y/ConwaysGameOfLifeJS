var ConwayView = function(domElement, dimensions, avatar) {
  this.$el = $(domElement)
  this.width = dimensions.width
  this.height = dimensions.height
  this.avatar = avatar
}

var prototype = {
  createGrid : function() {
    for (var index=0; index<this.height; index++) {
      this.$el.append('<tr>'+('<td>'+this.avatar+'</td>').repeat(this.width)+'</tr>')
    }
  }
}

ConwayView.prototype = prototype

