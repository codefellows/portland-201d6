code demo
========
**index.html**
``` html   
<!DOCTYPE html>
<html>
  <head> 
    <title>About Me (wed)</title>
  </head>
  <body>
    <h1>Jane Doe</h1>
    <h2>Biography</h1>
    <p>Jane was born in Kroakerville. Jane has three pet robots. Jane learned to read and write javascript. Janes robots can also read and write Javascript. Every night they would sit by a fire, drink tea, and share Javascript.</p>
    <h2>Experience</h2>
    <ul>
      <li>Codefellows 201</li>
      <li>Code Academy</li>
    </ul>
    <h2>Goals</h2>
    <ul>
      <li>Write clean javascript.</li>
      <li>Undestand how to handle merge conflicts.</li>
      <li>Make an app that I will use everyday.</li>
      <li>Pass GO and collect $200.</li>
    </ul>
    <script src="app.js" type="text/javascript"></script>
  </body>
</html>
```   

**app.js**
``` javascript   
// 201
// 5-wed-lecture code demo

// code from 3-wed-lecture code demo
var userName = prompt('What is your name?');
console.log('The user said there name is ' + userName);

alert('Hey there, ' + userName + ' I\'m going to ask you some questions about me. Please answer Y or N.');
var userResponse = prompt('Was, I born on the moon?');
console.log('userResponse: ' + userResponse);

if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {
  alert('Nope, I was actualy born on the moon. I\'ma moonian computer language.');
} else if (userResponse === 'Y'){
  alert('Nice, I was born on the moon');
} else {
  alert('Ooops!, you should have given a Y or N, so you loose this round.');
}

// new code
console.log('before the while loop favoriteNum is ' + favoriteNum);
while(favoriteNum !== 57){
  var favoriteNum = parseInt(prompt('what is my favorite number.'));

  if (favoriteNum > 57){
    alert('Your guess: ' + favoriteNum + ' was too high!'); 
  } else if (favoriteNum < 57){
    alert('Your guess: ' + favoriteNum + ' was too low!'); 
  } else if (typeof(favoriteNum) === 'number'){
    // this will allways pass because parseInt will allways return a number
    // NaN is still considered a number
    alert('You have to enter a number, dummy!');
  } else {
    // this should never run because the three previous conditions are exhostive 
    alert('WTF, this should never happen');
  }
}

var pets = ['SlugNeo', 'CatMushi', 'PupQuazi', 'FrogLulwat'];
var petRespnse = prompt('Can you name of my pets?');
var correctGuess=false;

for (var i=0; i< pets.length; i++){
  console.log('pets[' + i + ']: ' + pets[i]);
  if (petRespnse === pets[i]){
    alert('Wow, are you psycic? ' + petRespnse + ', is totally one of my pets!'); 
    correctGuess = true;
  }
}

if (!correctGuess){
  alert('Nope, you failed looser!');
}
```   
