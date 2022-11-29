
const navLinks = document.querySelectorAll('.nav-link');
const navMenu = document.querySelector('#navbarNavAltMarkup')

const closeNav = () => {
    navMenu.classList.remove('show')
}

navLinks.forEach(l => l.addEventListener('click', closeNav))