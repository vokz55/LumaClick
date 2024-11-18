let timer;

clickButton.addEventListener("mousedown", () => {
  timer = setTimeout(() => {
    alert("Congratulations, you have reached the secret level.");
  }, 7000);
});

clickButton.addEventListener("mouseup", () => {
  clearTimeout(timer);
});

// Secret click
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