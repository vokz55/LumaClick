const settingsButton = document.querySelector('.settings-icon');
const settingsGrid = document.querySelector('.settings-grid');
const settingsGridBg = document.querySelector('.settings-grid__background');

const slider = document.getElementById('scale-slider');
const box = document.getElementById('box');

header.addEventListener('click', () => {
    if(settingsButton.classList.contains('active')) {
    settingsButton.classList.remove('active');
    settingsGrid.classList.remove('active');
    }
});

settingsButton.addEventListener('click', (event) => {
    event.stopPropagation();
    settingsButton.classList.toggle('active');
    settingsGrid.classList.toggle('active');
});

settingsGridBg.addEventListener('click', () => {
    settingsButton.classList.toggle('active');
    settingsGrid.classList.toggle('active');
});




slider.addEventListener('input', () => {
  const scaleValue = slider.value;
  document.documentElement.style.fontSize = `${scaleValue}px`;
});

function settingsIconDisplay() {
    settingsButton.style.display = 'block';
};

function settingsIconDisplayReset() {
    settingsButton.style.display = 'none';
};