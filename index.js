$(document).ready(function(){
  var dimensions = {height: 3, width: 3}
  var myLGA = new LifeGameApp(dimensions)
  console.log(myLGA.board.state)
})