'use strict'

const button = document.querySelector('.btn')


const buttonAnimation = (e) => {
    //remove last 'span's
    const toRemove = e.target.querySelectorAll('.circle');
    toRemove.forEach(el => {el.remove()})
    
    //cursor position from the top of window
    const topWindowClick = e.clientY
    const leftWindowClick = e.clientX
    //position of the top/left of window to the top/left of the button
    const topButton = e.target.offsetTop
    const leftButton = e.target.offsetLeft
    //position of the cursor inside button
    const positionY = topWindowClick - topButton
    const positionX = leftWindowClick - leftButton
    
    console.log('x: ' + positionX);
    console.log('y: ' + positionY);


    const newSpan = document.createElement('span')
    newSpan.classList.add('circle')
    newSpan.style.top = positionY + 'px';
    newSpan.style.left = positionX + 'px';

    e.target.append(newSpan)
}


button.addEventListener('click', buttonAnimation)