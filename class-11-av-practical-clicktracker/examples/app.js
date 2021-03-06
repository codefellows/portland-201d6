'use strict';
var paths = ['sweep.png', 'dog-duck.jpg', 'breakfast.jpg'];
var items = [];
var displayIndex = 0;

//get the main that contains the images
var displayArea = document.getElementById('image_area');

//create a new instance of ItemImage for every path and
//add it to the items array
for(var i = 0; i < paths.length; i++) {
  var newItem = new ItemImage(paths[i]);
  items.push(newItem);
}

//add a click listener to the main that contains our images
displayArea.addEventListener('click', clickHandler);

//declare the click handler for the main
function clickHandler(event) {
  //take the path from the src attribute of the img node
  //that we clicked on. We get a reference to that node
  //from event.target
  var targetString = event.target.src;
  //take the relevant part of the path from the node
  var targetPath = targetString.split('assets')[1];
  var itemPath;

  //look through the ItemImage objects to find the one that
  //corresponds to the image we clicked on
  for (var i = 0; i < items.length; i++) {
    //get the relevant part from the path on the object
    itemPath = items[i].path.split('assets')[1];
    if (itemPath === targetPath) {
      //when we find the right object increment its clicked
      //property
      items[i].clicked += 1;
    }
  }

  changePicture();
}

//constructor for our image objects
function ItemImage(path) {
  this.path = '../lab/assets/' + path;
  this.clicked = 0;
}

function changePicture() {
  var imageOne = document.getElementById('image_one');
  var randomIndex = generateRandomNumber();

  while (displayIndex === randomIndex) {
    randomIndex = generateRandomNumber();
  }

  displayIndex = randomIndex;
  imageOne.src = '../lab/assets/' + paths[randomIndex];

  function generateRandomNumber() {
    return Math.floor(Math.random() * paths.length);
  }
}
