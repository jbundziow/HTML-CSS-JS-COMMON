const scrollToTopBtn = document.querySelector('.scroll-to-top');

const handleScrollbar = () => {
    // console.log(window.scrollY); //top of the screen
    // console.log(window.innerHeight); //vw height
    // console.log(document.body.scrollHeight); //total height of the page
        const progressInPerc = window.scrollY/(document.body.scrollHeight - window.innerHeight)*100
        document.documentElement.style.setProperty('--scroll-width', `${progressInPerc}%`);

        if (progressInPerc > 80) {
            scrollToTopBtn.classList.add('active')
        }
        else {
            scrollToTopBtn.classList.remove('active')
        }
}


window.addEventListener('scroll', handleScrollbar)
scrollToTopBtn.addEventListener('click', () => {window.scrollTo(0, 0)})