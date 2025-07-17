//  fetch data from json file
async function getJson() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching or parsing JSON:', error);
  }
}

const cards = document.querySelectorAll('.card');
const links = document.querySelectorAll('.card__links a');

async function updateTimeFrame(period) {
  const data = await getJson();
  if (!data) return;
  cards.forEach((cardElement) => {
    const title = cardElement.getAttribute('id');
    const matched = data.find((item) => item.title === title);
    if (matched) {
      const current = cardElement.querySelector('.current');
      const previous = cardElement.querySelector('.previous');
      current.textContent = `${matched.timeframes[period].current}hrs`;
      let label = '';
      if (period === 'daily') label = 'Yesterday';
      if (period === 'weekly') label = 'Last Week';
      if (period === 'monthly') label = 'Last Month';
      previous.textContent = `${label} - ${matched.timeframes[period].previous}hrs`;
    }
  });
}

updateTimeFrame('weekly');

// Event listeners
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const period = link.textContent.toLowerCase(); // 'daily', 'weekly', 'monthly'
    updateTimeFrame(period);
  });
});
