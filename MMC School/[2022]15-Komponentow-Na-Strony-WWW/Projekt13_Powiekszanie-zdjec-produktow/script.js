const imgBox = document.querySelector('.image-box')
const img = document.querySelector('.image-box > img')




const zoomIn = e => {
    const imgOffsetX = imgBox.offsetLeft;
    const imgOffsetY = imgBox.offsetTop;
    const cursorX = e.clientX;
    const cursorY = e.clientY;
    
    const resultX = cursorX - imgOffsetX;
    const resultY = cursorY - imgOffsetY;

    img.classList.add('zoom-img')
    img.style.transformOrigin = `${resultX}px ${resultY}px`
}

const zoomOut = () => {
    img.classList.remove('zoom-img')
}


imgBox.addEventListener('mousemove', zoomIn)
imgBox.addEventListener('mouseleave', zoomOut)