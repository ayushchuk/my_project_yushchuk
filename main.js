var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt("Введіть своє");
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Уважно слухаю ваше запитання, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Уважно слухаю ваше запитання, ' + storedName + "!";
}

myButton.onclick = function() {
  setUserName();
}

console.log("Це було жорстко...")