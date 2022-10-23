const btn = document.querySelector('button');
const div = document.querySelector('div');
const actualPerc = document.querySelector('p');



const perc2color = (perc) => {
    div.style.backgroundColor="red";
}











btn.addEventListener('click',() => {perc2color(100)});