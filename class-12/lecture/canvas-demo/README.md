Canvas Demo
===========

**index.html**
``` html   
<!DOCTYPE html>
<html>
  <head>
    <title>Chart JS Demo</title>
  </head>
  <body>
    <h1>Chart JS Demo</h1>
    <canvas id="radial-graph" width="500" height="500"></canvas>
    <script src="js/app.js"></script> 
  </body>
</html>
```   

**js/app.js**
``` javascript   
var radialGraph = document.getElementById('radial-graph');
var context = radialGraph.getContext('2d');

function randomBetween(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderFill(){
  for (var i = 0; i < 500; i += 10 ){
    for (var j = 0; j < 500; j += 10 ){
      if (i % 20 === 0){
        context.fillStyle = 'rgb(' + i + ',' + randomBetween(100, 255)+ ', ' + (256 - i) + ')'
      } else {
        context.fillStyle = 'rgb(0 ,0,0)'
      }
      context.fillRect(j, i, 10, 10);
      context.fillStyle = 'rgb( ' + randomBetween(0, 255) + ', ' + randomBetween(0, 255) + ', ' + randomBetween( 0, 255) + ')' ;
      context.font = '80px Arial';
      context.fillText('hello canvas', 20, i);
    }
  }


  console.log('wat');
  setTimeout( renderFill, 50);
}

renderFill();
```   

