var myImage = document.querySelector('img');
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  var newSrc = 'images/firefox-icon.png';
  
  if (mySrc === newSrc) {
    newSrc = 'images/go.png';
  }
  myImage.setAttribute('src', newSrc);
}

document.querySelector('h1').onclick = function() {
  alert('Ouch! Stop poking me!');
}

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}