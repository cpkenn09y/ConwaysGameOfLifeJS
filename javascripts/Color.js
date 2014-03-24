// SOURCE - http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript

var Color = {
  randomHex : function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }
}