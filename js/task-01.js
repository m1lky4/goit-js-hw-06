const categoryList = [...document.querySelectorAll('#categories >li.item')];

console.log(`Number of categories: ${categoryList.length}`);
categoryList.forEach((category) => {

  console.log(`Category: ${category.querySelector('h2').textContent}
  Elements: ${category.querySelector('ul').childElementCount}`);

});
