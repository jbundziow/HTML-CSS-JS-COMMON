const body = document.querySelector('body');
const cards = document.querySelectorAll('.card')


function changeSeason () {
	cards.forEach(card => {
		card.classList.remove('active')
		this.classList.add('active')
		changeBackgroundColor(this)
	})
}

const changeBackgroundColor = (card) => {
	const selectedSeason = card.getAttribute('data-season')
	body.setAttribute('data-bg', selectedSeason)
}


cards.forEach(card => card.addEventListener('click', changeSeason))