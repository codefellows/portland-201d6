Chart JS Demo
=============


**index.html**
``` html   
<!DOCTYPE html>
<html>
  <head>
    <title>Chart JS</title>
    <script src="js/chart.min.js"></script>
  </head>
  <body>
    <h1>Welcome to Chart JS</h1>
    <canvas id="polar-area-demo" width="500" height="500"></canvas>
    <script src="js/app.js"></script>
  </body>
</html>
```   

**js/app.js**
``` javascript   
var canvasEl = document.getElementById('polar-area-demo');
var context = canvasEl.getContext('2d');

function PieChartData(){
  this.allPieData = [];
}

PieChartData.prototype.pushData = function(pieData){
  this.allPieData.push(pieData);
};

PieChartData.prototype.renderToCanvas = function (context){
  new Chart(context).PolarArea(this.allPieData);
};

function PieData(label, value, color){
  this.label = label;
  this.value = value;
  this.color = color;
  this.highlight = '#fa7a7a';
}

var favoriteColorPieData = new PieChartData();

var red = new PieData('red', 4, '#ff0000');
var green = new PieData('green', 3, '#00ff00');
var blue = new PieData('blue', 2, '#0000ff');

favoriteColorPieData.pushData(red);
favoriteColorPieData.pushData(green);
favoriteColorPieData.pushData(blue);
favoriteColorPieData.renderToCanvas(context)

/*
var dataforChart = [
  {
    value: 3,
    label: 'document.getElementById()',
    color: '#811BD6',
    highlight: '#811B33'
  },
  {
    value: 8,
    label: 'Math.random()',
    color: '#9CBABA',
    highlight: '#9CBA99'
  },
  {
    value: 7,
    label: '"for" loops',
    color: '#D18177',
    highlight: '#D18133'
  }
];

var polar = new Chart(context).PolarArea(dataforChart);
*/

```   

