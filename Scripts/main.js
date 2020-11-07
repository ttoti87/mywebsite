let myHeading = document.querySelector('h1');
myHeading.textContent = 'Quel beau site internet!';
//document.querySelector('html').addEventListener('click', function(){alert('Aïe, arrêtez de cliquer !!');});
let myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/chat.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});
