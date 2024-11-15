// При помощи скролла
// let lastScrollTop = 0; // Переменная для хранения последней позиции скролла
// let lastDirection = null; // Направление предыдущего скролла (null, "up" или "down")

// window.addEventListener("scroll", () => {
//   let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (currentScrollTop > lastScrollTop) {
//     // Скролл вниз
//     if (lastDirection !== "down") {
//       count++; // Увеличиваем count на 1 только при первом скролле вниз
//       lastDirection = "down"; // Обновляем направление на "вниз"
//       console.log(`Скролл вниз: count = ${count}`);
//       clickCount.textContent = count;
//     }
//   } else if (currentScrollTop < lastScrollTop) {
//     // Скролл вверх
//     if (lastDirection !== "up") {
//       count++; // Увеличиваем count на 1 только при первом скролле вверх
//       lastDirection = "up"; // Обновляем направление на "вверх"
//       console.log(`Скролл вверх: count = ${count}`);
//       clickCount.textContent = count;
//     }
//   }

//   lastScrollTop = currentScrollTop; // Обновляем последнее значение прокрутки
// });