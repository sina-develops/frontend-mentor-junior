const registerForm = document.querySelector('.newsletter__reg');
const successForm = document.querySelector('.newsletter__success');
const form = document.getElementById('form');
const input = document.querySelector('.email');
const submitBtn = document.querySelector('.submit-btn');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    registerForm.style.display = 'none';
    successForm.style.display = 'grid';
  }
});

submitBtn.addEventListener('click', () => {
  registerForm.style.display = 'grid';
  successForm.style.display = 'none';
});

