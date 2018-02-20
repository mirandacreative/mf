// MR 2.20.2018
console.log('/js/script.js is loaded');

var checkbox = document.getElementById('checkbox');
// require agreement before signup
$(document).ready(function(){
    $('#signup-button').click(function(){ console.log('signup');
        if(checkbox.checked !== true){
            alert('You must agree to the membership terms before you continue.');
            return false;
        }
    });
});        
