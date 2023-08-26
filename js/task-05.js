const inputForm = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
inputForm.addEventListener('input', event => {
  const inputValue = event.currentTarget.value;
  output.textContent = inputValue;
  output.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});