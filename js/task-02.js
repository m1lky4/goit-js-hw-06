const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const markUp = ingredients
  .map((ingredient => `<li class = "item">${ingredient}</li>`))
  .join('');
list.insertAdjacentHTML('afterbegin', markUp);