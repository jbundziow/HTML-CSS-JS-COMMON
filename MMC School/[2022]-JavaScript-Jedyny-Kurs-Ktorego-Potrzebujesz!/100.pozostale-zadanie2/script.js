const ulLis = document.querySelectorAll('.wrapper > ul > li');

ulLis.forEach((item, i) => {
    item.textContent = i+1;
    item.dataset.id = i+1;
}
);

const thirdLi = document.querySelector('[data-id="3"]');
console.log(thirdLi);


const grandparent = thirdLi.parentElement.parentElement;
console.log(grandparent);

// OR...
// const grandparent = thirdLi.closest('.wrapper')
// console.log(grandparent);