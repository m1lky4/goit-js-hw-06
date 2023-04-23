const inputName = document.querySelector('#name-input');
let output = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
  output.innerHTML = inputName.value;
  if (inputName.value === '') {
    output.innerHTML = 'Anonymous';
  }
});