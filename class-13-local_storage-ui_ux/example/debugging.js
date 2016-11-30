'use strict';
//Type Error
var variable = undefined;

variable.property = 'string';

var testArray = [{name: 'item'}, {}, {name:'item_three'}];

for (var i = 0; i < 4; i++) {
  console.log(testArray[i].name);
}
variable();

throw new Error('ERRORERRORERORRRRRR');

var arr = ['item', 'item_two', 'item_three'];

function firstFunction() {
  console.log('hello from first');
  secondFunction();
}

function secondFunction() {
  console.log('hello from second');
  thirdFunction();
}

function thirdFunction() {
  console.log('hello from third');
  throw new Error('ERROR IN THIRD FUNCTION');
}

firstFunction();

function errorFunction(object) {
  console.log('input for errorFunction', object);
  console.log(object.name);
  object.somethingElse = 'another property';
  console.log('output for errorFunction', object);
  return object;
}

var returnedObject = errorFunction({});

console.log(returnedObject.somethingElse);
