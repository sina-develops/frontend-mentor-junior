const hamburger = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.close-menu');
const navList = document.querySelector('.nav-list');
const overlay = document.querySelector('.nav-overlay');

function openMenu() {
  navList.classList.add('active');
  closeBtn.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeMenu() {
  navList.classList.remove('active');
  closeBtn.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
