function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
const inputCreate = controls.querySelector('input');
const boxes = document.querySelector('#boxes');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('[data-destroy]');
function createBoxes(amount) {
  let size = 30;
    for (let i = 0; i < amount; i++) {
      let newElem = document.createElement('div');
      newElem.style.width = size + 'px';

      newElem.style.height = size + 'px';
      
      newElem.style.backgroundColor = getRandomHexColor();
      
      boxes.append(newElem);
      size += 10;
  }
}
create.addEventListener('click', () => {
  createBoxes(inputCreate.value);
});

function destroyBoxes() {
  boxes.innerHTML = '';
}
destroy.addEventListener('click', destroyBoxes);