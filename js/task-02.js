const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i++){
let listItem = document.createElement('li');
listItem.textContent = ingredients[i];
listItem.classList.add('item');
list.append(listItem);    
}