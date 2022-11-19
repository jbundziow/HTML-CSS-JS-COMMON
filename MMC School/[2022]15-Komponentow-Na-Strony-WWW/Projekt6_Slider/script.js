const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const sliderBox = document.querySelector('.slider-box')
const carouselImages = document.querySelectorAll('.slider-img')

const carouselWidth = 800;
const carouselSpeed = 3000;
let indexImg = 0;
let startCarousel;


const handleImage = () => {
    if (indexImg > carouselImages.length - 1) {
        indexImg = 0;
    } else if (indexImg < 0) {
        indexImg = carouselImages.length - 1
    }
    const result = (-1)*indexImg*carouselWidth;
    sliderBox.style.transform = `translateX(${result}px)`

}
const startIntervalCarousel = () => {
     startCarousel = setInterval(() => {
        indexImg++;
        handleImage();
    }, carouselSpeed);
}



const handleButton = (direction) => {
    clearInterval(startCarousel)
    direction === 'right' ? indexImg++ : indexImg--;
    handleImage();
    startIntervalCarousel();
    
}


btnRight.addEventListener('click', () => {handleButton('right')})
btnLeft.addEventListener('click', () => {handleButton('left')})
startIntervalCarousel()