const searchInput = document.querySelector('.nav-search-input')
const searchBtn = document.querySelector('.search-button')



const toggleSearch = () => {
    searchInput.classList.toggle('active');
}

searchBtn.addEventListener('click', toggleSearch)