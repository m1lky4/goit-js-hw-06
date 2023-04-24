const input = document.querySelector('#validation-input[data-length]')
const expectedLength = input.dataset.length;
input.addEventListener('blur', () => {
  if (input.value.length === +expectedLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
