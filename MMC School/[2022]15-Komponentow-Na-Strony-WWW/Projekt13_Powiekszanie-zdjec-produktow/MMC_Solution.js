const img = document.querySelector('img')

const zoomImg = e => {
	const x = e.clientX
	const y = e.clientY
	// wskazują pozycję kursora w przeglądarce

	const imgX = img.offsetLeft
	const imgY = img.offsetTop
	// pozycja obrazka

	const newX = (imgX - x) * -1
	const newY = (imgY - y) * -1
	// pozycja kursora wewnątrz obrazka

	img.style.transformOrigin = `${newX}px ${newY}px`
	img.classList.add('zoom-img')
}

const resetImg = () => {
	img.classList.remove('zoom-img')
}

img.addEventListener('mousemove', zoomImg)
img.addEventListener('mouseout', resetImg)
