// MR 2.20.2018
console.log('/js/script.js is loaded');

var checkbox = document.getElementById('checkbox');
var signup_button = document.getElementById('signup-button');

signup_button.onclick = function(e){// prevent anchor link from redirecting if the agreement box is not checked. 
    console.log('signup clicked');
      if(checkbox.checked !== true){
          alert('You must agree to the membership terms before you continue.');
          return false;
      }
};