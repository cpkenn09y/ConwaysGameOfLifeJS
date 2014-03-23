var FormHelper = {
  retrieveData : function(form) {
    var name = form.name.value
    var width = form.width.value
    var height = form.height.value
    var maxGenerations = form.generations.value
    $(form).hide()
    return {name: name, width: width, height: height, maxGenerations: maxGenerations}
  }
}