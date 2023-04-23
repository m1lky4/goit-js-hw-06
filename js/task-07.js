
const sizeControl = document.querySelector('#font-size-control');
const textInput = document.querySelector('#text');

sizeControl.addEventListener('input', () => {
  let sizeControlValue = sizeControl.value;
  textInput.style.fontSize = `${sizeControlValue}px`;
});