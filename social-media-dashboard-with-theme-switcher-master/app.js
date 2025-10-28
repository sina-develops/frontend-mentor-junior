const checkBox = document.querySelector('.checkbox');
const body = document.querySelector('body');
const mainHeader = document.querySelector('h1');
const secondaryHeader = document.querySelector('h2');
const subHeader = document.querySelector('.subheader');
const darkMode = document.querySelector('.dark-mode');
const card = document.querySelectorAll('.card');
const cardData = document.querySelectorAll('.followers p:nth-child(1)');
const stat = document.querySelectorAll('.stat');
const statData = document.querySelectorAll('.stat p:nth-child(3)');

checkBox.addEventListener('click', () => {
  if (checkBox.checked) {
    // light mode
    body.style.background = 'hsl(0 0% 100%)';
    mainHeader.style.color = 'hsl(232, 19%, 15%)';
    cardData.forEach((item) => {
      item.style.color = 'hsl(232, 19%, 15%)';
    });

    card.forEach((item) => {
      item.style.backgroundColor = 'hsl(227, 47%, 96%)';
    });

    stat.forEach((item) => {
      item.style.backgroundColor = 'hsl(227, 47%, 96%)';
    });

    statData.forEach((item) => {
      item.style.color = 'hsl(232, 19%, 15%)';
    });
  } else {
    // dark mode
    body.style.background = 'hsl(230, 17%, 14%)';
    mainHeader.style.color = 'hsl(0 0% 100%)';
    cardData.forEach((item) => {
      item.style.color = 'hsl(0, 0%, 100%)';
    });

    card.forEach((item) => {
      item.style.backgroundColor = 'hsl(228, 28%, 20%)';
    });

    stat.forEach((item) => {
      item.style.backgroundColor = 'hsl(228, 28%, 20%)';
    });

    statData.forEach((item) => {
      item.style.color = 'hsl(0, 0%, 100%)';
    });
  }
});
