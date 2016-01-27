
// Slide 03

var hamburger = document.getElementById('hamburger');

hamburger.addEventListener("click", toggleSidenav); 

function toggleSidenav() {
  document.body.classList.toggle('sidenav-active');
}