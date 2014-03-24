# Conway's Game of Life JS

Created a javascript implementation of Conway's Game of Life.

Rules Regarding Advancement to Next Generation:
[http://en.wikipedia.org/wiki/Conway's_Game_of_Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life)

1. Less than 2 live neighbors => "OFF"
2. Exactly 2 live neighbors => keep its same status
3. Exactly 3 live neighbors => "ON"
4. Greater than 3 live neighbors=> "OFF"

## Link to the Live Project

* [http://cpkenn09y.github.io/ConwaysGameOfLifeJS/](http://cpkenn09y.github.io/ConwaysGameOfLifeJS/)

## Design Aspects:

Artfully craft code that is modular, object oriented, and readable.

* Create a MVC-like structure
  * Model = [Cell.js](https://github.com/cpkenn09y/ConwaysGameOfLifeJS/blob/master/javascripts/Cell.js)
  * View = [ConwayView.js](https://github.com/cpkenn09y/ConwaysGameOfLifeJS/blob/master/javascripts/ConwayView.js)
  * Controller = [ConwayApp.js](https://github.com/cpkenn09y/ConwaysGameOfLifeJS/blob/master/javascripts/ConwayApp.js)
* Strive to write functions that have a single responsibility
* It was also important to me to create a visual representation that allowed the user to get visual feedback that the application was working
* Use agile development principles to reach MVP while writing high quality code
* Allow users to provide input for the game and be able to click on grid squares to turn them "ON" or "OFF"

## Future Improvements

* Write unit tests and integration tests to ensure stability
* Make app responsive to different device screen sizes
* Improve the overall user experience
* Allow for any number to be accepted for width/height without taking away from the aesthetics
* Decrease the time it takes to load in assets via Require.js and code minification
* Consider adding a backend to do server-side logic: to free up client-side processing power
* Keep refactoring code for increased efficiency and readability

## Tech Choices
* Javascript to allow users to interact and customize the game in the browser
* jQuery to quickly and efficiently manipulate the DOM
* Underscore.js for Enumerable methods

## To Run the Application Locally:

1. Open the Terminal Application (Mac OSX)
2. Copy and Paste Each Line of Code:

* cd Desktop
* git clone https://github.com/cpkenn09y/ConwaysGameOfLifeJS.git
* python -m SimpleHTTPServer 8000

3. Enter the following URL into Google Chrome

* [http://localhost:8000/](http://localhost:8000/)

#### For Funsies:
* Click on the grid squares to turn cells "ON" and "OFF"
* The game will continue forever if you do not specify the number of generations
  * Once it reaches a steady state, bring the game back to life by clicking on squares!

#### Images:
Working layout as of March 23rd:
![image](http://i.imgur.com/psN9nhk.png)

Working layout as of March 24th:
![image](http://i.imgur.com/0agM1IU.png)
![image](http://i.imgur.com/AF9F5V9.png)

