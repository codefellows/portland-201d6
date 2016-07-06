setTimeout and setInterval Demo
===============================

**index.html**
``` html   
<!DOCTYPE html>
<html>
  <head>
    <title>setTimeout and setInterval Demo</title>
  </head>
  <body>
    <h1>setTimeout and setInterval Demo</h1>
    <script src='js/app.js'></script>
  </body>
</html>
```   

**js/app.js**
``` javascript   
var intervalId;

function sayHello(){
  console.log('hello');
}

function sayGoodbye(){
  console.log('goodbye');
}

function delayHelloOneSecond(){
  setTimeout(sayHello, 1000);
}

function startSayingGoodbye(){
  stopSayingGoodbye();
  intervalId = setInterval(sayGoodbye, 1000);
}

function stopSayingGoodbye(){
  if (intervalId){
    clearInterval(intervalId)
  }
}
```   

