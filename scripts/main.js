let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';
let myVariable = 'Bob';
myHeading.addEventListener('click', function() {

    if (myHeading.textContent === 'Bonjour, monde !') {
    myHeading.textContent= myVariable;
    
} else {
    myHeading.textContent = 'Bonjour, monde !';
    
}});

//AJOUTER UN CHANGEUR D'IMAGE

let myimage = document.querySelector('img');
myimage.addEventListener('click', function(){
    let mysrc= myimage.getAttribute('src');
    if (mysrc === 'images/firefox.svg') {
        myimage.setAttribute('src', 'images/firefox-icon-2.svg');
    } else {
        myimage.setAttribute('src', 'images/firefox.svg');
    }
});

//AJOUTER UN MESSAGE D'ACCUEIL PERSONNALISE

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
  };

  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
  };

  myButton.addEventListener('click', function() {
    setUserName();
  }); 