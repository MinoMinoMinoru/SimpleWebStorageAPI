var messageForm = document.getElementById('message');
var sampleText = document.getElementById('sampleText');

if (!localStorage.getItem('message')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('message', document.getElementById('message').value);
  setStyles();
}

function setStyles() {
  var currentMessage = localStorage.getItem('message');

  document.getElementById('message').value = currentMessage;
  sampleText.innerText = currentMessage;
}

messageForm.onchange = populateStorage;