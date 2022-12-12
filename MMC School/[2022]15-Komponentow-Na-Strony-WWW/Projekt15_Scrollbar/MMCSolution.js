const btn =document.querySelector('.scroll-to-top')
let root = document.documentElement;

const handleScrollBar = () => {
	const scroll = window.scrollY

	const leftToScroll = document.body.getBoundingClientRect().height - window.innerHeight
	// console.log(`wysokość strony ${document.body.getBoundingClientRect().height}`);
	// console.log(`wysokość viewportu ${window.innerHeight}`);
	// console.log(leftToScroll);

	const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100)
	console.log(scrollBarWidth);

	root.style.setProperty('--scroll-width', `${scrollBarWidth}%`)

	if(scrollBarWidth > 80) {
		btn.classList.add('active')
	} else {
		btn.classList.remove('active')
	}
}

const scrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	})
}

window.addEventListener('scroll', handleScrollBar)
btn.addEventListener('click', scrollToTop)