const billInput = document.getElementById('bill');
const personInput = document.getElementById('person');
const customInput = document.getElementById('custom-input');
const tipAmountDisplay = document.querySelector('.amount');
const totalAmountDisplay = document.querySelector('.all');
const buttons = document.querySelectorAll('.tip-btn');
const errorMsgs = document.querySelectorAll('.error');
const resetBtn = document.querySelector('.reset-btn');

let bill = 0;
let person = 1;
let tipPercentage = 0;

function calculateTip() {
  bill = parseFloat(billInput.value) || 0;
  person = parseInt(personInput.value) || 0;

  if (person < 0 && bill !== '') {
    errorMsgs[1].style.visibility = 'visible';
    personInput.style.border = '2px solid red';
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
    return;
  } else {
    errorMsgs[1].style.visibility = 'hidden';
    personInput.style.border = 'none';
  }

  if (bill < 0) {
    errorMsgs[0].style.visibility = 'visible';
    billInput.style.border = '2px solid red';
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
    return;
  } else {
    errorMsgs[0].style.visibility = 'hidden';
    billInput.style.border = 'none';
  }

  const tipAmouont = (bill * tipPercentage) / 100;
  const tipPerPerson = person > 0 ? tipAmouont / person : 0;
  const totalPerPerson = person > 0 ? (bill + tipAmouont) / person : 0;

  tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    tipPercentage = parseFloat(button.id);
    customInput.value = '';
    calculateTip();
  });
});

customInput.addEventListener('input', () => {
  tipPercentage = parseFloat(customInput.value) || 0;
  calculateTip();
});

billInput.addEventListener('input', calculateTip());
personInput.addEventListener('input', calculateTip());

resetBtn.addEventListener('click', () => {
  billInput.value = '';
  personInput.value = '';
  customInput.value = '';
  tipAmountDisplay.textContent = '$0.00';
  totalAmountDisplay.textContent = '$0.00';
  errorMsgs.forEach((msg) => (msg.style.visibility = 'hidden'));
  billInput.style.border = 'none';
  personInput.style.border = 'none';
  bill = 0;
  person = 1;
  tipPercentage = 0;
});
