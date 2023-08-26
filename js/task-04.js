const counter = {
    value: 0,
    increment() {
      this.value += 1;
    },
    decrement() {
      this.value -= 1;
    },
  };
  
  
  const decrementBtn = document.querySelector('.decrement');
  const incrementBtn = document.querySelector('.increment');
  const value = document.querySelector('#value')
  
  decrementBtn.addEventListener('click', () => {
    counter.decrement();
    value.textContent = counter.value;
  });
  incrementBtn.addEventListener('click', () => {
    counter.increment();
    value.textContent = counter.value;
  });