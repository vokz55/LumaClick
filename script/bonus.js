let timer;

clickButton.addEventListener("mousedown", () => {
  // Начинаем отсчёт времени при нажатии на кнопку
  timer = setTimeout(() => {
    alert("Поздравляем, вы вышли на секретный уровень");
    // Здесь можно добавить любое действие, которое нужно выполнить через 10 секунд
  }, 5000); // 10000 миллисекунд = 10 секунд
});

clickButton.addEventListener("mouseup", () => {
  // Останавливаем таймер, если кнопку отпустили раньше
  clearTimeout(timer);
});

// Тайный клик
const header = document.querySelector('.main');
header.addEventListener('click', (event) => {
    const rect = header.getBoundingClientRect();
    const isInBottomLeftCorner =
        event.clientX >= rect.left &&
        event.clientX <= rect.left + 20 &&
        event.clientY >= rect.bottom - 20 &&
        event.clientY <= rect.bottom;

    if (isInBottomLeftCorner) {
        double = double + 50;
    }
});