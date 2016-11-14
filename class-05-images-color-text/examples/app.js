'use strict';

function myFirstFunction() {
	console.log('HELLOOOOOO');
}

myFirstFunction();

function sayHiToDave() {
  console.log('Hello Dave');
}

function sayHiToAaron() {
  console.log('Hello Aaron');
}

function sayHi(name) {
  //var name = the first thing in the parentheses
  console.log('Hello ' + name);
}


function upperCase(string) {
  return string.toUpperCase();
}

var upperCaseName = upperCase('Aaron');
var otherUpperCaseName = upperCase('Dave');





function loudLastName(firstName, lastName) {
  lastName = lastName.toUpperCase();
  return [firstName, lastName];
}

function properHello(firstName, lastName) {
  console.log('Hello more properly or something, '
    + firstName + ' ' + lastName);
}

function toInitials(name) {
  name = name.charAt(0);
  return name;
}

var nameArray = loudLastName('Aaron', 'Krause');
// properHello(nameArray);

// properHello(nameArray[0], nameArray[1]);

//var initialFirstName = toInitials('Aaron');

//properHello(initialFirstName, 'Krause')

properHello(toInitials('Aaron'), 'Krause'));






























