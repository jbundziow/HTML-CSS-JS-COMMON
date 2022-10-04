// MY SOLUTION:

//add <ul></ul>
let ul = document.createElement('ul');
document.body.append(ul);

//add 10x <li>$</li>
 for (let i=0; i<10; i++) {
    let unorderedList = document.querySelector('ul');
    unorderedList.innerHTML += '<li>'+(i+1)+'</li>';
 }

//change text and styling of the last li
const lastLi = document.querySelectorAll('li')[9];
lastLi.innerHTML = "I'm the last element";
lastLi.style = "background-color: royalblue; padding: 20px 40px; font-size: 48px";



//SOLUTION FROM COURSE:
/*
const ulList = document.createElement('ul');
document.body.append(ulList);
const number = 10;

for (let i=0; i<number; i++) {
    const liItem = document.createElement('li');
    liItem.textContent = i;
    ulList.append(liItem);
}

const lastLi = ulList.querySelector('li:last-child');
lastLi.textContent = "Jestem ostatnim elementem";

lastLi.style.backgroundColor = "royalblue";
lastLi.style.padding = "20px 40px";
lastLi.style.fontSize = "48px";
*/

