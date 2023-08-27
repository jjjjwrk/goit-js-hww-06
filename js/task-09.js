function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const span = document.querySelector('.color');

btnChangeColor.addEventListener('click', bodyBackground)

function bodyBackground (event) {
  const functionRandomColor = getRandomHexColor();
  document.body.style.backgroundColor = functionRandomColor;
  span.textContent = functionRandomColor;
}
