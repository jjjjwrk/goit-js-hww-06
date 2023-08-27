const validationInput = document.querySelector('#validation-input');
const handler = event => {
    const inputValueLength = event.currentTarget.value.length;
    if(inputValueLength === Number(validationInput.dataset.length)){
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid') 
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid')
    }
};
validationInput.addEventListener('blur', handler);