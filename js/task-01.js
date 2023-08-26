const categoryList = document.querySelectorAll('.item');
// console.log(categoryList);
console.log(`Number of categories: ${categoryList.length}`);
categoryList.forEach(item => {
    // console.log(item);
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});