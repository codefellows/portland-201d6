var myFirstObject = {};

var argument = 'favoriteAnimal';
var hours = ['7am', '8am', '9am'];

myFirstObject.name = 'dave';
myFirstObject[argument] = 'slug';

myFirstObject.subObject = {};
myFirstObject.subObject.favoriteAnimal = 'sloth';

console.log(myFirstObject);

var cookieStore = {
	name: 'Downtown',
	storeHours: ['7am', '8am', '9am'],
	whatHours: function() {
		console.log('I am open certain hours: ' + this.storeHours);
	},
	listHours: function() {
		var contentArea = document.getElementById('content_area');
		var ul = document.createElement('ul');
		var li;

		for (var i = 0; i < this.storeHours.length; i++) {
			li = document.createElement('li');

			li.textContent = this.storeHours[i];
			ul.appendChild(li);
		}

		contentArea.appendChild(ul);
	}
};

//Math Random function for reference
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

cookieStore.listHours();


