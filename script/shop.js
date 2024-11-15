const shopButton = document.querySelector('.shop-button');
const shop = document.querySelector('.shop');
const bgShop = document.querySelector('.shop-background');

bgShop.addEventListener('click', () => {
    shop.style.display = 'none';
    bgShop.style.display = 'none';
});

shopButton.addEventListener('click', () => {
    shop.style.display = 'grid';
    bgShop.style.display = 'block';
});

let animationTime = 1.1;

buyAutoClickBtn.addEventListener('click', () => {
    if (count >= 200 * auto) {
      if (!interval) { // Проверка, что интервал еще не запущен
        interval = setInterval(incrementCount, 1000);
      };
      
      if (animationTime >= 0.2) {
        animationTime = animationTime - 0.1;
      };

      document.querySelector('.auto-count').style.animation = `scaletwo 2s ease, scale ${animationTime}s forwards alternate infinite 2s`;
      count -= 200 * auto; // Уменьшаем count после покупки
      auto += auto; // Увеличиваем авто-клик
      priceAutoClick.textContent = auto * 200; // Обновляем цену
      const autoPrice = document.querySelector('.auto-speed');
      autoPrice.textContent = auto * 2; // Обновляем скорость авто-кликов
    } else {
      alert('У Вас недостаточно средств!');
    }
  });
  
  function incrementCount() {
    count += auto;
    clickCount.textContent = count;
    squareCount();
  }
  
  buyMegaClickBtn.addEventListener('click', () => {
    if(count >= 1000) {  
      megaClick();
      document.querySelector('.click-name').textContent = 'MEGA-CLICK'
      document.querySelector('.buy-mega-click-button-name').textContent = 'SOLD'
      const p = document.querySelector('.buy-mega-click-button .button-indicator');
      p.style.display = 'none';
      count = count - 1000;
      clickCount.textContent = count;
      buyMegaClickBtn.disabled = true;
    } else if (count < 1000) {
      alert('У Вас недостаточно средств!');
    }
  })
  
  function megaClick() {
    mega = 3;
  };
  
  let price = 1000;
  priceMegaClick.textContent = price;