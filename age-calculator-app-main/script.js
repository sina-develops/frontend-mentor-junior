document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const inputDay = document.getElementById('day');
  const inputMonth = document.getElementById('month');
  const inputYear = document.getElementById('year');

  const yearOutput = document.querySelector('.result-year');
  const monthOutput = document.querySelector('.result-month');
  const dayOutput = document.querySelector('.result-day');

  const inputs = [inputDay, inputMonth, inputYear];

  const currentDate = new Date();

  // Utility function to show error for a specific input
  function showError(input, message) {
    const errorElem = input.nextElementSibling;
    errorElem.textContent = message;
    errorElem.style.display = 'block';
    input.previousElementSibling.style.color = 'hsl(0, 100%, 67%)'; // red color for label
  }

  // Utility function to clear error for a specific input
  function clearError(input) {
    const errorElem = input.nextElementSibling;
    errorElem.textContent = '';
    errorElem.style.display = 'none';
    input.previousElementSibling.style.color = ''; // reset label color
  }

  // Validate individual inputs, returns true if valid
  function validateInput(input) {
    const val = Number(input.value);

    if (!val) {
      showError(input, 'This field is required');
      return false;
    }

    switch (input.id) {
      case 'day':
        if (val < 1 || val > 31) {
          showError(input, 'Must be a valid day');
          return false;
        }
        break;

      case 'month':
        if (val < 1 || val > 12) {
          showError(input, 'Must be a valid month');
          return false;
        }
        break;

      case 'year':
        if (val > currentDate.getFullYear() || val < 1) {
          showError(input, 'Must be a valid year');
          return false;
        }
        break;
    }

    clearError(input);
    return true;
  }

  // Validate all inputs, returns true if all valid
  function validateAll() {
    return inputs.every(validateInput);
  }

  // Calculate age and display results
  function calculateAge(day, month, year) {
    const birthDate = new Date(year, month - 1, day);
    if (birthDate > currentDate) {
      // Birthdate cannot be in future
      alert('Birthdate cannot be in the future.');
      return;
    }

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      // Days in previous month
      const prevMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0,
      );
      days += prevMonth.getDate();
    }

    if (months < 0) {
      months += 12;
      years--;
    }

    yearOutput.textContent = years;
    monthOutput.textContent = months;
    dayOutput.textContent = days;
  }

  // Add real-time validation on input
  inputs.forEach((input) => {
    input.addEventListener('input', () => validateInput(input));
  });

  // Prevent form default submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateAll()) {
      return;
    }

    const day = Number(inputDay.value);
    const month = Number(inputMonth.value);
    const year = Number(inputYear.value);

    calculateAge(day, month, year);
  });
});
