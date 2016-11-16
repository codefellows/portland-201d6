'use strict';

var clickMeButton = document.getElementById('click_me');

clickMeButton.addEventListener('click', handleClick);

function handleClick() {
	alert('CLICKED');
}

var nameForm = document.getElementById('name_form');

nameForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var textBox = document.getElementById('form_text');
  var firstName = event.target.first_name.value;
  var lastName = event.target.last_name.value;

  textBox.textContent = 'Hi ' + firstName + ' ' + lastName;

  event.target.first_name.value = '';
  event.target.last_name.value = '';
}

var chatForm = document.getElementById('chat_form');
var messages = [];

chatForm.addEventListener('submit', handleChatSubmit);

function handleChatSubmit(event) {
  event.preventDefault();

  var message = event.target.message.value;
  var author = event.target.author.value;

  var newMessage = new ChatMessage(message, author);
  messages.push(newMessage);

  event.target.message.value = '';
  event.target.author.value = '';

  renderChat();
}

function ChatMessage(message, author) {
  this.message = message;
  this.author = author;
}

function renderChat() {
  var chatSection = document.getElementById('chat_messages');
  var messageParagraph;
  var author;
  var message;

  chatSection.textContent = '';

  for (var i = 0; i < messages.length; i++) {
    messageParagraph = document.createElement('p');

    message = messages[i].message;
    author = messages[i].author;

    messageParagraph.textContent = author + ': ' + message;

    chatSection.appendChild(messageParagraph);
  }
}







