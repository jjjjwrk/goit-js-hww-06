const inputFontSizeControl = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

function handler (event) {
    span.style.fontSize = inputFontSizeControl.value + 'px';
}

inputFontSizeControl.addEventListener('input', handler);

