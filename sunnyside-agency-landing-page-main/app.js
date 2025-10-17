const hamburgerIcon = document.querySelector('.menu')
const hamburgerLinks = document.querySelector('.hamburger_links');

hamburgerIcon.addEventListener('click',()=>{
  hamburgerLinks.classList.toggle('active')
})