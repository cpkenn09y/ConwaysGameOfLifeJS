String.prototype.repeat = function(frequency) {
  var repeatedString = []
  for (var i=0; i<frequency; i++) {
    repeatedString.push(this)
  }
  return repeatedString.join('')
}