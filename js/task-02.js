const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const arr = [];
ingredients.forEach(ingredient => {

  let listItem = document.createElement('li');

  listItem.textContent = ingredient;

  listItem.classList.add('item');
  arr.push(listItem);
});
list.append(...arr)



// const markUp = ingredients
//   .map((ingredient => `<li class = "item">${ingredient}</li>`))
//   .join('');
// list.insertAdjacentHTML('afterbegin', markUp);