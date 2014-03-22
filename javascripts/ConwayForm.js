var ConwayForm = function(domElement) {
  this.$el = $(domElement)
  this.attachFormListener()
}

var prototype = {
  attachFormListener : function(domElement) {
    this.$el.on('submit', function(event) {
      event.preventDefault()
      var name = this.name.value
      var width = this.width.value
      var height = this.height.value
      var maxGenerations = this.generations.value
      $(this).hide()
    })
  }
}

ConwayForm.prototype = prototype