'use strict';
//this variable is in the global scope
var someAnimalVariable = 'hyrax';

//declare a function with the function keyword followed by the name of the
//function. After the name a set of parentheses and a block which contains
//the code that you want to run when you call it.
function myFirstFunction() {
  //this variable is in the local scope. Since we declared it with var only the
  //function has access to it
  var someAnimalVariable = 'gnarwhal';
  console.log('in the function scope someAnimalVariable has the value of: ' + someAnimalVariable);
}
//call a function with parentheses after the name of the function
myFirstFunction();
myFirstFunction();

console.log('In the global scope someAnimalVariable has the value of: ' + someAnimalVariable);
