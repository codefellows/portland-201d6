// 201
// 5-thur-lecture code demo
// A guessing game with five questions about your. With responses that very depending upon the answer.

var questionOneEl = document.getElementById('question-one');
var questionOneResponseEL = document.getElementById('question-one-response');
var questionTwoEl = document.getElementById('question-two');
var questionTwoResponseEL = document.getElementById('question-two-response');

var questionOneText = questionOneEl.textContent;
var response = prompt(questionOneText);
console.log('wat');

if (response.toLowerCase() === 'n' || response.toUpperCase() === 'NO') {
  questionOneResponseEL.textContent = 'Correct! How did you know?';
} else if (response.toLowerCase() === 'y' || response.toUpperCase() === 'YES') {
  questionOneResponseEL.textContent = 'Sorry, You are wrong!';
} else {
  questionOneResponseEL.textContent = 'N/A'; 
  alert('Please give a yes or no answer.');
}

var questionTwoText = questionTwoEl.textContent;
var response = prompt(questionTwoText);

if (response.toLowerCase() === 'n' || response.toUpperCase() === 'NO') {
  questionTwoResponseEL.textContent = 'You are right! I have a virtual bunny.';
} else if (response.toLowerCase() === 'y' || response.toUpperCase() === 'YES') {
  questionTwoResponseEL.textContent = 'Nope, I acutaly have a virtual bunny.';
} else {
  questionTwoResponseEL.textContent = 'N/A';
  alert('Please give a yes or no answer.');
}
