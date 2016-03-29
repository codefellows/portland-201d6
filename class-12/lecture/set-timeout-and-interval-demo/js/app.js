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
