// 201
// 7-thur-lecture code demo
// functions

// what is a funciton?
// Functions let you group a series of statements together to perform a specific task.
// If there are parts of a script that repeat the same task, you can reuse the function.


// what is a function declaration vs. function call?
// a function that will log "hello, world"

// a function declaration is when you define/declare the function
// this is a function declaration
function sayHello(){
  console.log('hello, world');
}

// a funciton call is when you run the function
// this is a function call
sayHello();

// what are parameters and arguments?
// parameters are what we call the input varaibles when we declare a function
// name is a parameter
function sayGoodBye(name){
  console.log('good bye, ' + name);
}

// arguments are what we call the input values when we call a function
// 'friend' is an argument
sayGoodBye('friend');

// what is a return value?
// function with return value
// If we want to get data back from a function we can use a 'return' statement
function getFullName(first, last){
  return first + ' ' + last;
}

// ada will equal 'Ada Lovelace';
var ada = getFullName('Ada', 'Lovelace');
console.log('ada: ' + ada);

// what is scope?
// scope the set of rules that dictates where you have access to a variable, depending
// on where you declare it. In Javascript variables that are declared in the main program
// are added to the global scope. In the browser the global scope is the window object.
// Variables that are declared in a funciton are only accesible from within that function.
// within a function you can allways access variables declared in a parent scope.

// If a variable in a parent scope has ben set before a function call, uses it that function 
// will have access to it.
var bpm = 120;          // variable declared in the global scope
console.log('bpm before slowDown(): ', bpm); 
function slowDown(){    // function declared in the global scope
  bpm = bpm - 5;        // variable declared in the scope of the function slowDown
}

slowDown();             // slowDown is called and bpm will now be 115
console.log('bpm after slowDown(): ', bpm); 

// If a variable is declared within the scope of a function no parent scope will be able to
// access that varaible.
function gloabalCannotAccessScope(){
  var topSecret = "My password is 1234"; 
}

console.log('topSecret: ' + topSecret); // this will throw an error for topSecret not being defiend
