// Task 1
// ----------------------------------------------------------
const categoryList = [...document.querySelectorAll('#categories')];


categoryList.forEach(category => {
    let categories = 0;
    let hasItem = category.querySelector('.item')
    if (hasItem) {
        categories += 1;
    }
    console.log(categories);
})





// Task 2
// -----------------------------------------------------------

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i++){
let listItem = document.createElement('li');
listItem.textContent = ingredients[i];
listItem.classList.add('item');
list.append(listItem);    
}

// Task 3
// ==========================================


