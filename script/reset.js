resetButton.addEventListener('click', () => {
    confirm('Ok?') 
    count = 0;
    double = 1;
    mega = 1;
    upgradeButton.style.display = 'none';
    speedDisplay.textContent = double;
    const divs = document.querySelectorAll('.layer div');
    divs.forEach(div => div.remove());
    resetButton.style.display = 'none';
    shopButton.style.display = 'none';
    clickCount.textContent = count;
    document.querySelector('.click-name').textContent = 'CLICK';
    buyMegaClickBtn.disabled = false;
    document.querySelector('.buy-mega-click-button-name').textContent = 'BUY'
    const p = document.querySelector('.buy-mega-click-button .button-indicator');
    p.style.display = 'inline-block';
    auto = 0.5;
    clearInterval(interval);
    interval = false;
    priceAutoClick.textContent = 100;
    const autoPrice = document.querySelector('.auto-speed');
    autoPrice.textContent = 1;
    document.querySelector('.auto-count').style.removeProperty('animation');
    root.style.setProperty('--first-accent-color-dynamic', 266);
    root.style.setProperty('--second-accent-color-dynamic', 300);
    lastDigitCount = 2;
    settingsIconDisplayReset()
});


  