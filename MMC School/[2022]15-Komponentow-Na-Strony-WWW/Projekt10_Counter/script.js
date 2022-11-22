const counterItems = document.querySelectorAll('.counter')
const counterBox = document.querySelector('.counter-box')


const counterStart = (entry) => {

    if (entry[0].isIntersecting) {
        counterItems.forEach(item => {
            const finalNumber = item.getAttribute('data-number')
            dynamicCounter (item, 0, finalNumber, 100)
        })
    }
}

const dynamicCounter = (element, startNum, endNum, time) => {
    const step = (endNum-startNum)/time
    let i = 0
    let value = 0

    let interval = setInterval(() => {
        if (i<time) {
        value = value + step;
        element.textContent = parseInt(value)
        i++;
        }
        else {
            //!ADDITIONAL FRAGMENT
            //slowly add last digits
            let lastSlowDigits = 7
            element.textContent = endNum - lastSlowDigits
            let slowInterval = setInterval(()=>{
                if (lastSlowDigits >= 0) {
                element.textContent = endNum - lastSlowDigits;
                lastSlowDigits--;
                }
                else {
                    clearInterval(slowInterval)
                }
            }, 100)
            //!END ADDITIONAL FRAGMENT

            clearInterval(interval)
        }
    }, 1)
}



const options = {
    rootMargin: '-250px'
}

const observer = new IntersectionObserver(counterStart, options)
observer.observe(counterBox);


