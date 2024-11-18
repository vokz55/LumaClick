// Функция для генерации случайного числа в диапазоне
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Создаем квадраты для каждого слоя
function createSquares(layer, count) {
for (let i = 0; i < count; i++) {
  const square = document.createElement('div');
  square.style.left = `${getRandomInt(0, 100)}%`;
  square.style.top = `${getRandomInt(0, 100)}%`;
  layer.appendChild(square);
}
}

const layer1 = document.querySelector('.layer1');
const layer2 = document.querySelector('.layer2');
const layer3 = document.querySelector('.layer3');

let layerIndex = 0; 

function squareCount() {
// let digitCount = count.toString().length; 
if (layerIndex === 0) {
    createSquares(layer1, 1);
  } else if (layerIndex === 1) {
    createSquares(layer2, 1);
  } else if (layerIndex === 2) {
    createSquares(layer3, 1);
  }
  layerIndex = (layerIndex + 1) % 6;
};

document.addEventListener('mousemove', (e) => {
const { clientX, clientY } = e;
const offsetX1 = (clientX / window.innerWidth - 0.5) * 50;
const offsetY1 = (clientY / window.innerHeight - 0.5) * 50;
const offsetX2 = (clientX / window.innerWidth - 0.5) * 100;
const offsetY2 = (clientY / window.innerHeight - 0.5) * 100;
const offsetX3 = (clientX / window.innerWidth - 0.5) * 200;
const offsetY3 = (clientY / window.innerHeight - 0.5) * 200;
layer1.style.transform = `translate(${offsetX1}px, ${offsetY1}px)`;
layer2.style.transform = `translate(${offsetX2}px, ${offsetY2}px)`;
layer3.style.transform = `translate(${offsetX3}px, ${offsetY3}px)`;
});