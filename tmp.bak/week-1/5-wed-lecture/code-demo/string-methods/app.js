// concat
// charAt
// toLowerCase
// toUpperCase
// trim
// indexOf
// lastIndexOf
// startsWith
// endsWith
// substring
// split 
// slice

var helloString = "    hello, world with a NUMBER 12346!   "
console.log('helloString: "' + helloString + '"');
console.log('\n');

// concat
console.log('concat returns a new string with arguments append to the original string');
console.log('helloString.concat("!!!!!!!!!!!!!"): "' + helloString.concat('!!!!!!!!!!!!!') + '"');
console.log('helloString.concat("good", "bye"): "' + helloString.concat('good', 'bye') + '"');
console.log('helloString: "' + helloString + '"');
console.log('\n');

// charAt
console.log('charAt returns the character at a specific index');
console.log('helloString.charAt(0): "' + helloString.charAt(0) + '"');
console.log('helloString.charAt(7): "' + helloString.charAt(7) + '"');
console.log('\n');

// toLowerCase
console.log('toLowerCase returns a new string with only lower case letters');
console.log('helloString.toLowerCase(): "' + helloString.toLowerCase() + '"');
console.log('\n');
// toUpperCase
console.log('toUpperCase returns a new string with only upper case letters');
console.log('helloString.toUpperCase(): "' + helloString.toUpperCase() + '"');
console.log('\n');

// trim
console.log('trim returns a new string that removes the whitespace from the beginning and the end of the string');
console.log('helloString.trim(): "' + helloString.trim() + '"');
console.log('\n');

// indexOf
console.log('indexOf returns the first index of a substring after a start index, the default start index is 0');
console.log('helloString.indexOf("NUMBER"): ' + helloString.indexOf("NUMBER"));
console.log('helloString.indexOf("l")     : ' + helloString.indexOf('l'));
console.log('helloString.indexOf("l", 7)     : ' + helloString.indexOf('l', 7));
console.log('helloString.indexOf("l", 8)     : ' + helloString.indexOf('l', 8));
console.log('\n');

// lastIndexOf
console.log('lastIndexOf returns the last index of a substring after a end index, the default start index is 0');
console.log('helloString.lastIndexOf("NUMBER"): ' + helloString.lastIndexOf("NUMBER"));
console.log('helloString.lastIndexOf("l")     : ' + helloString.lastIndexOf('l'));
console.log('helloString.lastIndexOf("l", 5)     : ' + helloString.lastIndexOf('l', 5));
console.log('helloString.lastIndexOf("l", 8)     : ' + helloString.lastIndexOf('l', 8));
console.log('\n');

// startsWith
console.log('startsWith returns true or false if the speficied argment has the same characters as the beginning of a string');
helloString = "hello, world";
console.log('helloString: "' + helloString + '"');
console.log('helloString.startsWith("hello"): ' + helloString.startsWith("hello"));
console.log('helloString.startsWith("unicorn"): ' + helloString.startsWith("unicorn"));
console.log('\n');

// endsWith
console.log('endsWith returns true or false if the speficied argment has the same characters as the end of a string');
helloString = "hello, world";
console.log('helloString: "' + helloString + '"');
console.log('worldString.endsWith("world"): ' + helloString.endsWith("world"));
console.log('helloString.endsWith("unicorn"): ' + helloString.endsWith("unicorn"));
console.log('\n');

// substring
console.log('substr returns a new string between a start and an end index, the default end index is string.length');
console.log('helloString: "' + helloString + '"');
console.log('helloString.substr(3)' + helloString.substr(3));

// split 
// slice
