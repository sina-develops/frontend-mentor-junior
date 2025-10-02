const form = document.querySelector('form');
const successMessage = document.querySelector('.success-message');

function showSuccessMessage() {
  successMessage.style.display = 'block';
}

function validateField(field) {
  const errorElement =
    field.type === 'radio'
      ? field.closest('fieldset').querySelector('.error-message')
      : field.parentElement.querySelector('.error-message');

  if (!field.validity.valid) {
    errorElement.textContent = field.dataset.error || 'This field is required';
    return false;
  }
  errorElement.textContent = '';
  return true;
}

form.querySelectorAll('input, textarea').forEach((input) => {
  input.addEventListener('blur', () => {
    validateField(input);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = true;

  const fields = form.querySelectorAll('input,textarea');
  fields.forEach((field) => {
    const fieldValid = validateField(field);
    if (!fieldValid) {
      isValid = false;
    }
  });

  if (isValid) {
    form.reset();
    showSuccessMessage();
  } else {
    form.querySelector(':invalid').focus();
  }
});
