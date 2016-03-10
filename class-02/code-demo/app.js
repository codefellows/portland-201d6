// 201
// 3-tue-lecture code demo

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
