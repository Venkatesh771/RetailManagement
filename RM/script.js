const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const authButtons = document.getElementById('auth-buttons');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  authButtons.classList.toggle('show');
});
