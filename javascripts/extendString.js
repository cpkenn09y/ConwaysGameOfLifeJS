String.prototype.repeat = function(frequency) {
  var repeatedString = []
  for (var i=0; i<frequency; i++) {
    repeatedString.push(this)
  }
  return repeatedString.join('')
}

String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.slice(1)
}