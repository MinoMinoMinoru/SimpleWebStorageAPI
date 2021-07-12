var messageForm = document.getElementById('message');
var sampleText = document.getElementById('sampleText');

if(!sessionStorage.getItem('message')) {
  console.log("There is no session Sorage")
  populateStorage();
} else {
  console.log("There is some session Sorage")
  setStyles();
}

function populateStorage() {
  sessionStorage.setItem('message', document.getElementById('message').value);
  setStyles();
}

function setStyles() {
  var currentMessage = sessionStorage.getItem('message');

  document.getElementById('message').value = currentMessage;
  sampleText.innerText= currentMessage;
}

messageForm.onchange = populateStorage;