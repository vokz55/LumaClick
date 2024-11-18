const root = document.documentElement;
const clickCount = document.querySelector('.count');
const clickButton = document.querySelector('.clicker');
const upgradeButton = document.querySelector('.upgrade');
const speedDisplay = document.querySelector('.speed-display');
const priceCount = document.querySelector('.price__count');
const resetButton = document.querySelector('.reset');
const buyAutoClickBtn = document.querySelector('.buy-auto-click-button');
const priceAutoClick = document.querySelector('.price-auto-click');
const buyMegaClickBtn = document.querySelector('.buy-mega-click-button');
const priceMegaClick = document.querySelector('.price-mega-click');
const header = document.querySelector('.main');

let count = 0;
let double = 1;
let mega = 1;
let auto = 0.5;
let interval;
let videoPlay = 0;



upgradeButton.style.display = 'none';
speedDisplay.textContent = double;

clickButton.addEventListener('click', () => {
  count = count + double * mega;
  clickCount.textContent = count;
  if (count >= 15 * double) {
    upgradeButton.style.display = 'flex';
  }
  let price = double * 15;
  priceCount.textContent = price;
  squareCount();
  displayButtons();
  incrementCountFunc();
  firstClicksFunc();
  settingsIconDisplay();
});

upgradeButton.addEventListener('click', () => {
  count = count - 15 * double;
  clickCount.textContent = count;
  upgradeButton.style.display = 'none';
  double = double + double;
  speedDisplay.textContent = double;
});

function displayButtons() {
  if(count >= 50) {
    resetButton.style.display = 'flex';
  };

  if(count >= 100) {
    shopButton.style.display = 'flex';
  }
  videoStart() 
};



function incrementCSSVariable() {
  let value = 0; // Начальное значение
  let digitCount = count.toString().length; 
  const maxValue = 80; // Конечное значение
  const duration = 2500; // Длительность в миллисекундах
  const interval = duration / maxValue; // Интервал между инкрементами
  const firstAccentColor = getComputedStyle(root).getPropertyValue('--first-accent-color-dynamic').trim();
  const accentFirstColorNum = Number(firstAccentColor);
  const secondAccentColor = getComputedStyle(root).getPropertyValue('--second-accent-color-dynamic').trim();
  const accentSecondColorNum = Number(secondAccentColor);

  const intervalId = setInterval(() => {
      value++;
      const firstFinalValue = accentFirstColorNum + value;
      const secondFinalValue = accentSecondColorNum + value;
      root.style.setProperty('--first-accent-color-dynamic', firstFinalValue); // Устанавливаем значение CSS-переменной
      root.style.setProperty('--second-accent-color-dynamic', secondFinalValue);
      if (value >= maxValue) {
          clearInterval(intervalId); // Останавливаем таймер
      }
  }, interval);
};

let lastDigitCount = 2;

function incrementCountFunc() {
  let digitCount = count.toString().length; 
  if (digitCount > lastDigitCount) {
    incrementCSSVariable(); // Вызываем функцию, если count увеличился на 1
  }
}

const firstClicks = document.querySelector('.first-clicks-text');


function firstClicksFunc() {
  let digitCount = count.toString().length;
  let firstClickCountVar = 10;
  const firstClickCount = firstClickCountVar ** (digitCount - 1);

  // console.log(`count: ${count}`);
  // console.log(`digitCount: ${digitCount}`);
  // console.log(`firstClickCount: ${firstClickCount}`);
  // console.log(`lastDigitCount: ${lastDigitCount}`);

  if(9 < count && count >= firstClickCount && digitCount > lastDigitCount) {
    firstClicks.textContent = `Congratulations on your first ${firstClickCount} clicks`;
    firstClicks.style.display = 'block';
    lastDigitCount = digitCount;
    setTimeout(() => {
      firstClicks.style.display = 'none';
    }, 3000);
  };
};




function videoStart() {
  const video = document.querySelector('.video-background');
  if (count >= 1000000 && videoPlay === 0) {
    if (confirm('Поздравляем с Вашим первым миллионом, можете забрать свой подарок')) {
      video.style.display = 'block';
      video.volume = 1;
      videoPlay = 0.5;
      setTimeout(() => {
        video.muted = false;
      }, 100);
    }
  };
}