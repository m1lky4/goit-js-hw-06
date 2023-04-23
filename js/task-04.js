let counterValue = 0;
const btnIncrement = document.querySelector('button[data-action ="increment"]');
const btnDecrement = document.querySelector('button[data-action ="decrement"]');
const totalCounter = document.querySelector('#value')
btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  totalCounter.innerHTML = counterValue;
})
btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
   totalCounter.innerHTML = counterValue;
});