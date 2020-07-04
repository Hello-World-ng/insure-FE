var element = document.querySelector('.hamburger');
var body = document.querySelector('body');
var menuOverlay = document.querySelector('.menu-overlay-container');

element.addEventListener('click', function(){
   element.classList.toggle('toggled');
   body.classList.toggle('toggled');
   menuOverlay.classList.toggle('toggled');
})