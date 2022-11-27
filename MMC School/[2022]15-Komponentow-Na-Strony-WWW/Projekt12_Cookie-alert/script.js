const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')

console.log(cookieBox);
console.log(cookieBtn);

const checkCookies = () => {
    if (localStorage.getItem('cookiesEaten')) {
        cookieBox.classList.add('hide')
    }
}

const handleCookieBox = () => {
    cookieBox.classList.add('hide')
    localStorage.setItem('cookiesEaten', 'true')    
}


cookieBtn.addEventListener('click', handleCookieBox)
checkCookies();
