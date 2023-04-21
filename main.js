// Task 1
// ----------------------------------------------------------

const categoryList = [...document.querySelectorAll('#categories >li.item')];

console.log(`Number of categories: ${categoryList.length}`);
categoryList.forEach((category) => {

  console.log(`Category: ${category.querySelector('h2').textContent}
  Elements: ${category.querySelector('ul').childElementCount}`);

});






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

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const gallery = document.querySelector('.gallery');

let markup = '';

for (let i = 0; i < images.length; i++) {
  markup += `<li width = "500" height = "500" class="gallery-img"><img src=${images[i].url} alt=${images[i].alt} /></li>`;
}
gallery.insertAdjacentHTML('afterbegin', markup);

//Task4 
// ====================================================

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

// Task 5
// ===================================================

const inputName = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputName.addEventListener('keydown', () => {
  inputName.innerHTML = output.innerHTML;
});



