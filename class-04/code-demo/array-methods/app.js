// empty array
var numberArray = [];
console.log('numberArray: ', numberArray);

// toString()
// will seporate the items of a string with a ','
numberArray = [55, 44, 33, 22];
console.log('numberArray.toString(): ' + numberArray.toString());

// push and pop
console.log('the push method adds an item to the end of an array');
numberArray.push(3);
console.log('numberArray.push(3)');
console.log('numberArray: [' + numberArray.toString()  + ']'); 
numberArray.push(-22);
console.log('numberArray.push(-22)');
console.log('numberArray: [' + numberArray.toString()  + ']'); 
numberArray.push(110);
console.log('numberArray.push(110)');
console.log('numberArray: [' + numberArray.toString()  + ']'); 
console.log('\n')

console.log('the pop method removes and returns the last item of an array');
var lastItem;
lastItem = numberArray.pop();
console.log('called numberArray.pop() stored the value in lastItem');
console.log('lastItem:    ', lastItem);
console.log('numberArray: [' + numberArray.toString()  + ']'); 
lastItem = numberArray.pop();
console.log('called numberArray.pop() stored the value in lastItem');
console.log('lastItem:    ', lastItem);
console.log('numberArray: [' + numberArray.toString()  + ']'); 
lastItem = numberArray.pop();
console.log('called numberArray.pop() stored the value in lastItem');
console.log('lastItem:    ', lastItem);
console.log('numberArray: [' + numberArray.toString()  + ']'); 
console.log('\n');

// unshift and shift
console.log('unshift adds an item to the beggining of an array');
numberArray.unshift(5);
console.log('numberArray.unshift(5)');
console.log('numberArray: [' + numberArray.toString()  + ']'); 
numberArray.unshift(44);
console.log('numberArray.unshift(44)');
console.log('numberArray: [' + numberArray.toString()  + ']'); 
numberArray.unshift(64);
console.log('numberArray.unshift(64)');
console.log('numberArray: [' + numberArray.toString()  + ']'); 
console.log('\n')

console.log('shift removes and returns the first item in an array');
var firstItem;
firstItem = numberArray.shift();
console.log('called numberArray.shift() stored the value in firstItem');
console.log('firstItem:    ', firstItem);
console.log('numberArray: [' + numberArray.toString()  + ']'); 
firstItem = numberArray.shift();
console.log('called numberArray.shift() stored the value in firstItem');
console.log('firstItem:    ', firstItem);
console.log('numberArray: [' + numberArray.toString()  + ']'); 
firstItem = numberArray.shift();
console.log('called numberArray.shift() stored the value in firstItem');
console.log('firstItem:    ', firstItem);
console.log('numberArray: [' + numberArray.toString()  + ']'); 
console.log('\n');

// concat  
console.log('concat will return a new array with the contents of the array that was called an and the array arguments');
var concatArray =  numberArray.concat([33,22,11,0]);
console.log('numberArray.concat([33,22,11,0]) and stored new array in concatArray');
console.log('concatArray: [' + concatArray.toString()  + ']'); 
console.log('\n');

// join
console.log('join will return a string of the items in the array seporated by a provided string, by default "," is the seporator');
console.log('numberArray.join(): ' +  numberArray.join());
console.log('numberArray.join("_"): ' +  numberArray.join('_'));
console.log('\n');

// indexOf and lastIndexOf
console.log('indexOf will return the first occurice of a specified value in an array, after a specified index(default 0)');
console.log('usage numberArray.indexOf("value", "startIndex")');
numberArray = [4,22,33,54,34,55,6,4,33];
console.log('numberArray: [' + numberArray.toString()  + ']'); 
console.log('numberArray.indexOf(33): ' + numberArray.indexOf(33));
console.log('\n');

// slice and splice
console.log('slice returns a new array composed of the contents between a start and end index, the default end index is array.length');
console.log('numberArray:               [' + numberArray.toString()  + ']'); 
console.log('numberArray.slice(3):      [' + numberArray.slice(3).toString() + ']');
console.log('numberArray.slice(2, 6):   [' + numberArray.slice(2,6).toString() + ']');
console.log('numberArray:               [' + numberArray.toString()  + ']'); 
console.log('\n')

console.log('splice removes returns a new array composed of the contents between a start and end index, the default end index is array.length');
console.log('numberArray:               [' + numberArray.toString()  + ']'); 
console.log('numberArray.splice(2, 6):  [' + numberArray.splice(2,6).toString() + ']');
console.log('numberArray:               [' + numberArray.toString()  + ']'); 
console.log('numberArray.splice(1):     [' + numberArray.splice(1).toString() + ']');
console.log('numberArray:               [' + numberArray.toString()  + ']'); 
console.log('\n')

// fill
console.log('fill will fill an array with a specified value between a start and end index');
numberArray = [2,3,4,5,5,3,23,234,4,3,234,23,4,8];
console.log('numberArray:                 [' + numberArray.toString()  + ']'); 
console.log('numberArray.fill(0):         [' + numberArray.fill(0).toString() + ']');
console.log('numberArray.fill(1, 3, 6):   [' + numberArray.fill(1, 3 , 6).toString() + ']');
